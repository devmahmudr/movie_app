import { useParams } from "react-router-dom";
import "./paginationComp.scss";
const goToTop = () => {
  window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
};

const PaginationComp = ({ page, setPage, totalPage }) => {
  return (
    <div className="pg-wrapper">
      <button
        disabled={page === 1}
        onClick={() => {
          setPage(page - 1);
        }}
        className={`${page == 1 ? "disabled" : ""}`}
      >pervius</button>
      <span style={{ color: "white" }}>
        {page} of {totalPage}
      </span>
      <button
        disabled={page == totalPage}
        onClick={() => {
          setPage(page + 1);
          goToTop()
        }}
      >next</button>
    </div>
  );
};

export default PaginationComp;
