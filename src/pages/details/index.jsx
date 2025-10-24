import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import DetailPageButton from "../../components/details/buttons/detailPageButton";
import { showFormattedDate } from "../../utils";

function NoteDetail({ notes, onDelete }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((note) => note.id === id);
  if (!note) {
    return (
      <div className="note-list-empty">
        <p>Catatan tidak ditemukan!</p>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(note.id);

    navigate("/");
  };

  return (
    <div className="detail-page">
      <h2 className="detail-page__title">{note.title}</h2>
      <p className="detail-page__createdAt">
        {showFormattedDate(note.createdAt)}
      </p>
      <div className="detail-page__body">
        <p>{note.body}</p>
      </div>
      <DetailPageButton onDelete={handleDelete} />
    </div>
  );
}

NoteDetail.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;
