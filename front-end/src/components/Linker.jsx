import { useState } from 'react';
import axios from 'axios';

function Result({url, shortUrl, id, screenWidth, minWidth, children}) {
    return (
        <>
        <li key={id} className="container card result">
            <p className="url">{url}</p>
            {
                screenWidth < minWidth ?
                (<hr/>) : null
            }
            <div className="container url-links">
                <a className="shortened">{shortUrl}</a>
                { children }
            </div>
        </li>
        </>
    );
}

function Results({children}) {
    return (
        <>
        <div id="results">
            <ul>
                <div className="gap" />
                { children }
            </ul>
            <div className="gap" />
        </div>
        </>
    );
}

export default function Linker({screenWidth, minWidth}) {
    const [url, setUrl] = useState("");
    const [error, setError] = useState(false);
    const [shortUrls, setShortUrls] = useState({});
    const [copied, setCopied] = useState("");

    function handleCopy(key) {
        setCopied(key);
        navigator.clipboard.writeText(key);
    }

    // Copied result will be saved as a string in the copied state
    // when rerendering results, will check which url is copied and render it as so
    let resList = (() => {
        let res = [];
        let baseLink = "https://github.com/Erleh/url-shortener";
        let shortened = "rebrand.ly/gq5tncp";
        res.push(   <Result     url={baseLink} 
                                shortUrl={shortened} 
                                key={baseLink} 
                                screenWidth={screenWidth} 
                                minWidth={minWidth}
                    >
                        <button onClick={() => handleCopy(shortened)} 
                                className={(shortened === copied ? "copied " : "") + "button"}>
                                    {shortened === copied ? "Copied!" : "Copy"}
                        </button>        
                    </Result>   
        );

        for(let key in shortUrls){
            console.log(key);
            res.push(   <Result     url={key} 
                                    shortUrl={shortUrls[key]} 
                                    key={key} 
                                    screenWidth={screenWidth} 
                                    minWidth={minWidth}
                        >
                            <button onClick={() => handleCopy(key)} 
                                    className={(key === copied ? "copied " : "") + "button"}>
                                        {key === copied ? "Copied!" : "Copy"}
                            </button>        
                        </Result>        
                    );
        }
        return res;

    })();

    async function getShortLink(ogLink) {
        let endpoint = 'https://url-shorten-api-5unt.onrender.com/api/url';

        let apiResponse = await axios.post(endpoint, {
            'url': url
        });

        let link = "";
        if (apiResponse.data.hasUrl) {
            link = apiResponse.data.res;
        }

        setShortUrls({...shortUrls, [ogLink]: link});
    }
    
    function handleInput(e) {
        setUrl(e.target.value);
    }
    
    function handleButton(e) {
        e.preventDefault();

        if(!error && url === "") {
            setError(true);
        } else {
            setError(false);
        }

        getShortLink(url);
    }

    return (
        <>
        <form id="link-form" className="container card">
            <label htmlFor="input" />
            <div id="link-input">
                <input onChange={ handleInput } className={error ? "input-error" : ""} type="text" id="input" name="link" placeholder="Shorten a link here..." />
                {
                    error ?
                    <p className="link-error">Please add a link</p> :
                    null
                }
            </div>
            <button className="button" onClick={ handleButton }>Shorten It!</button>
        </form>
        <Results screenWidth={screenWidth} minWidth={minWidth}>
            {resList}
        </Results>
        </>
    )
} 