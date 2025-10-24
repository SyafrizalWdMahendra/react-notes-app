import React, { useState } from "react";
import Navbar from "./pages/home/navbar";
import Home from "./pages/home";
import NoteDetails from "./pages/details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateNotes from "./pages/create";
import { getAllNotes } from "./utils/local-data";

function App() {
  const [notes, setNotes] = useState(getAllNotes());

  const onAddNoteHandler = (newNote) => {
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home notes={notes} />} />
            <Route
              path="/notes/:id"
              element={<NoteDetails notes={notes} onDelete={onDeleteHandler} />}
            />
            <Route
              path="/notes/new"
              element={<CreateNotes onAddNote={onAddNoteHandler} />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
