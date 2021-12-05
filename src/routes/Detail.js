import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import '../Style/Style.scss';

function Detail(){

    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState(false);

    const {id} = useParams();
    console.log(id);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        console.log(json);

        setDetail(json.data.movie);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    },[]);

    return (
        <div className="container">
            {loading? (<h1>Loading...</h1>) : (
                <div className="detail">
                    <h1>{detail.title}</h1>
                    <img src={detail.medium_cover_image}/>
                    <p className="year">{detail.year}</p>
                    <p className="desc">{detail.description_full}</p>
                </div>
            )}
        </div>
    );
}

export default Detail;