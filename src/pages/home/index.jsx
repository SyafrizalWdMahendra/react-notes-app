import React, { useState } from "react";
import ListItem from "./items";
import AddNewPageButton from "../../components/home/buttons/addNewPage";
import PropTypes from "prop-types";

function Home({ notes }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
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
        <AddNewPageButton />
      </main>
    </>
  );
}

Home.propTypes = {
  notes: PropTypes.array.isRequired,
};

export default Home;
