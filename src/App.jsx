import React from "react";
import Navbar from "./modules/home/components/navbar";
import Home from "./modules/home";
import Archived from "./modules/home/components/archive";
import NoteDetails from "./modules/home/components/noteDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/archived" element={<Archived />} />
            <Route path="/notes/:id" element={<NoteDetails />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
