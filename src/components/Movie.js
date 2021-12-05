import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import '../Style/Style.scss';

function Movie({id, mediumCoverImage, title, year, summary, genres}){
    return (
        <div className="main-container">
          <img src={mediumCoverImage} alt={title}/>
          <h2><Link to={`/movie/${id}`} className="image">{title}</Link></h2>
          <p className="year">{year}</p>
          <p className="summary">{summary}</p>
          <ul>
            {genres.map(g => (
            <li key={g}>{g}</li>
            ))}
          </ul>          
        </div>
    );
}

Movie.propTypes ={
    id:PropTypes.number.isRequired,
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;