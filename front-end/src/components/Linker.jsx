import { useState } from 'react';
import axios from 'axios';

function Result({url, shortUrl, id}) {
    return (
        <>
        <li key={id} className="container card result">
            <p className="url">{url}</p>
            <hr/>
            <a href={shortUrl} className="shortened" target="_blank">{shortUrl}</a>
        </li>
        </>
    );
}

function Results({children}) {
    let resList = children.map(res => {

    });
    return (
        <>
        <div id="results">
            <div className="gap" />
            { children }
        </div>
        </>
    );
}

export default function Linker() {
    const [url, setUrl] = useState("");
    const [shortUrls, setShortUrls] = useState({});

    let resList = (() => {
        let res = [];
        for(let key in shortUrls){
            console.log(key);
            res.push(<Result url={key} shortUrl={shortUrls[key]} key={key}/>);
        }
        return res;
    })();

    function getShortLink() {
        axios.get(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then(res => {
                setShortUrls({
                    ...shortUrls,
                    [url] : res.data.result["full_short_link"]
                });
                // createResult(res.data.result["full_short_link"]);
                console.log(res.data.result["full_short_link"]);
            });
    }
    
    function handleInput(e) {
        setUrl(e.target.value);
    }
    
    function handleButton(e) {
        e.preventDefault();
        getShortLink();
    }

    return (
        <>
        <form id="link-form" className="container card">
            <label htmlFor="input" />
            <input onChange={ handleInput } type="text" id="input" name="link" placeholder="Shorten a link here..." />
            <button onClick={ handleButton }>Shorten It!</button>
        </form>
        <Results>
            {resList}
        </Results>
        </>
    )
} 