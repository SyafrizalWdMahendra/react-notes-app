import React from "react";
import { Link } from "react-router-dom";
import { ArchiveButton } from "./ArchiveButton";

function AddNewPageButton() {
  return (
    <div className="add-new-page__action" title="Tambah">
      <ArchiveButton />
      <Link to="/notes/new">
        <div className="action">+</div>
      </Link>
    </div>
  );
}

export default AddNewPageButton;
