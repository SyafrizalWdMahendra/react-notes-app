import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddAction from "../../components/create/buttons/AddAction";
import { addNote } from "../../utils/network-data";
import useInput from "../../hooks/useInput";

function CreateNotes() {
  const [title, onTitleChangeHandler] = useInput("");
  const [body, onBodyChangeHandler] = useInput("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await addNote({ title, body });
      navigate("/home");
    } catch (error) {
      console.error("Failed to add note:", error);
      alert("Failed to add note. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="add-new-page">
      <form className="add-new-page__input" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="add-new-page__input__title"
          placeholder="Catatan Rahasia"
          value={title}
          onChange={onTitleChangeHandler}
          required
          disabled={loading}
        />
        <textarea
          className="add-new-page__input__body"
          placeholder="Tulis catatan Anda di sini..."
          value={body}
          onChange={onBodyChangeHandler}
          required
          disabled={loading}
        />
        <AddAction loading={loading} />
      </form>
    </section>
  );
}

export default CreateNotes;
