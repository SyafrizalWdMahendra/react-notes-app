import React from "react";
import PropTypes from "prop-types";

function DetailPageButton({ onDelete }) {
  return (
    <div className="detail-page__action">
      <button type="button" title="Hapus" className="action" onClick={onDelete}>
        🗑️
      </button>
    </div>
  );
}

DetailPageButton.propTypes = { onDelete: PropTypes.func.isRequired };

export default DetailPageButton;
