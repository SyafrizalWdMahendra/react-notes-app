import React, { useState } from "react";
import ListItem from "./components/items";
import { getAllNotes } from "../../utils/local-data";

function Home() {
  const [allNotes] = useState(getAllNotes());
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = allNotes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <main>
        <div className="note-list">
          <h2>Active Note</h2>
          <div className="search-bar">
            <input
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Cari berdasarkan judul ..."
            />
          </div>
        </div>

        <ListItem notes={filteredNotes} />
      </main>
    </>
  );
}

export default Home;
