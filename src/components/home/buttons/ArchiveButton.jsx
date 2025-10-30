import { Link } from "react-router-dom";

export const ArchiveButton = () => {
  return (
    <>
      {" "}
      <Link to="/archived" className="action" title="Archived Notes">
        📦
      </Link>
    </>
  );
};
