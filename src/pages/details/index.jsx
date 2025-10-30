import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailPageButton from "../../components/details/buttons/detailPageButton";
import { showFormattedDate } from "../../utils";
import { getNote, deleteNote, archiveNote } from "../../utils/network-data";

function NoteDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const noteData = await getNote(id);
        setNote(noteData);
      } catch (error) {
        console.error("Failed to fetch note:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteNote(note.id);
      navigate("/");
    } catch (error) {
      console.error("Failed to delete note:", error);
      alert("Failed to delete note. Please try again.");
    }
  };

  const handleArchive = async () => {
    try {
      await archiveNote(note.id);
      navigate("/");
    } catch (error) {
      console.error("Failed to archive note:", error);
      alert("Failed to archive note. Please try again.");
    }
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Loading note...</p>
      </div>
    );
  }

  if (!note) {
    return (
      <div className="note-list-empty">
        <p>Catatan tidak ditemukan!</p>
      </div>
    );
  }

  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">
        <p>{note.body}</p>
      </div>
      <DetailPageButton onDelete={handleDelete} onArchive={handleArchive} />
    </div>
  );
}

export default NoteDetail;
