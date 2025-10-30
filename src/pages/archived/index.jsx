import React, { useState, useEffect } from "react";
import ListItem from "../../components/home/ListItems";
import { getArchivedNotes } from "../../utils/network-data";

function ArchivedNotes() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArchivedNotes = async () => {
      try {
        const archived = await getArchivedNotes();
        setNotes(archived);
      } catch (error) {
        console.error("Failed to fetch archived notes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArchivedNotes();
  }, []);

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>Loading archived notes...</p>
      </div>
    );
  }

  return (
    <main>
      <div className="note-list">
        <h2>Archived Notes</h2>
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
  );
}

export default ArchivedNotes;
