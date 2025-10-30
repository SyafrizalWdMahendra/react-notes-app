import React, { useState, useEffect } from "react";
import ListItem from "../../components/home/ListItems";
import AddNewPageButton from "../../components/home/buttons/AddNewPageButton";
import { getActiveNotes } from "../../utils/network-data";
import useInput from "../../hooks/useInput";

function Home() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, handleInputChange] = useInput("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const activeNotes = await getActiveNotes();
        setNotes(activeNotes);
      } catch (error) {
        console.error("Failed to fetch notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Loading notes...</p>
      </div>
    );
  }

  return (
    <>
      <main>
        <div className="note-list">
          <h2>Active Notes</h2>
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

export default Home;
