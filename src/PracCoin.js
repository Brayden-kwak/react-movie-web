import {useState, useEffect} from 'react';

function PracCoin(){
    const [loading, setLoading] = useState(true);
    const [conis, setConis] = useState([]);
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((res) => res.json())
        .then((json) => {
            setConis(json);
            setLoading(false);
        });
    },[]);
    return ( 
        <div>
            <h1>Movie! {loading? "" : `(${conis.length})`}</h1>
            {loading ? (<strong>Loading...</strong>
            ) : (
            <select>
                {conis.map((coin) => (
                    <option>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
                ))}
            </select>
            )}
        </div>
    );
}

export default PracCoin