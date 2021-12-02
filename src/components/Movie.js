import PropTypes from 'prop-types';

function Movie({mediumCoverImage, title, year, summary, genres}){
    return (
        <>
          <img src={mediumCoverImage} alt={title}/>
          <h2>{title}</h2>
          <p>{year}</p>
          <p>{summary}</p>
          <ul>
            {genres.map(g => (
            <li key={g}>{g}</li>
            ))}
          </ul>          
        </>
    );
}

Movie.propTypes ={
    mediumCoverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;