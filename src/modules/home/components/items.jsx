import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ListItem({ notes }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <Link to={`/notes/${note.id}`} className="note-item" key={note.id}>
            <h3 className="note-item__title">{note.title}</h3>
            <p className="note-item__createdAt">
              {new Date(note.createdAt).toLocaleDateString("id-ID")}
            </p>
            <p className="note-item__body">{note.body}</p>
          </Link>
        ))
      ) : (
        <div className="notes-list-empty">
          <p>Tidak ada catatan</p>
        </div>
      )}
    </div>
  );
}

ListItem.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default ListItem;
