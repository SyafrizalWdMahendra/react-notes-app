import React from "react";
import PropTypes from "prop-types";

function DetailPageButton({ onDelete, onArchive }) {
  return (
    <div className="detail-page__action">
      {onArchive && (
        <button
          type="button"
          title="Arsipkan"
          className="action"
          onClick={onArchive}
        >
          📦
        </button>
      )}
      <button type="button" title="Hapus" className="action" onClick={onDelete}>
        🗑️
      </button>
    </div>
  );
}

DetailPageButton.propTypes = {
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func,
};

export default DetailPageButton;
