import "./tvcard.scss"
import { Link } from "react-router-dom"
const TvCard = ({id, title, imgLink, rating, relaseDate}) => {
  return (
    <div className="card">
      <Link to={`/single-movie/${id}`}>
        <img src={imgLink} alt="film" />
      </Link>
      <div className="card-item">
        <h2 className="title">{title}</h2>
        <div className="card-item-right">
        <p className="relase">{relaseDate}</p>
        <p className="rating">{rating}</p>
        </div>
      </div>

    </div>
  )
}

export default TvCard