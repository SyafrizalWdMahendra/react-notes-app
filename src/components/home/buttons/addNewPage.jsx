import React from "react";
import { Link } from "react-router-dom";

function AddNewPageButton() {
  return (
    <div className="add-new-page__action" title="Tambah">
      <Link to="/notes/new">
        <div className="action">+</div>
      </Link>
    </div>
  );
}

export default AddNewPageButton;
