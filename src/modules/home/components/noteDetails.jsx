import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../../../utils/local-data";

function NoteDetail() {
  const { id } = useParams();
  const note = getNote(id);
  if (!note) {
    return <p>Catatan tidak ditemukan!</p>;
  }

  return (
    <div className="note-detail">
      <h2 className="note-detail__title">{note.title}</h2>
      <p className="note-detail__createdAt">
        {new Date(note.createdAt).toLocaleDateString("id-ID")}
      </p>
      <div className="note-detail__body">
        <p>{note.body}</p>
      </div>
    </div>
  );
}

export default NoteDetail;
