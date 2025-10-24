import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AddAction from "../../components/create/buttons/addAction";

function CreateNotes({ onAddNote }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newNote = {
      id: `notes-${+new Date()}`,
      title: title,
      body: body,
      archived: false,
      createdAt: new Date().toISOString(),
    };

    onAddNote(newNote);

    setTitle("");
    setBody("");
    navigate("/");
  };

  return (
    <section className="add-new-page">
      {/* 7. Ganti <form> agar menggunakan onSubmit React */}
      <form className="add-new-page__input" onSubmit={onSubmitHandler}>
        {/* 8. Ganti div[contenteditable] dengan <input> */}
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Catatan Rahasia"
          value={title} // Terhubung ke state
          onChange={onTitleChangeHandler} // Terhubung ke handler
          required
        />

        {/* 9. Ganti div[contenteditable] dengan <textarea> */}
        <textarea
          className="add-new-page__input__body"
          placeholder="Tulis catatan Anda di sini..."
          value={body} // Terhubung ke state
          onChange={onBodyChangeHandler} // Terhubung ke handler
          required
        />
        <AddAction />
      </form>
    </section>
  );
}

CreateNotes.propTypes = {
  onAddNote: PropTypes.func.isRequired,
};

export default CreateNotes;
