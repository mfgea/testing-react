import axios from "axios";
import { useEffect, useState } from "react";
import { XkcdComic } from "../Components/XkcdComic";
import { MyButton } from "../UI/MyButton"; 

export const TestPage = () => {
    const [backendData, setBackendData] = useState(null);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        async function getData() {
            try {
                const data = await axios.get("https://any-api.com:8443/http://xkcd.com/info.0.json");
                setBackendData(data);
            } catch(e) {
                console.log('errrrrr', e.name, e.message)
            }
        };
        getData();
    }, []);

    const clickCounter = () => {
        setCounter(counter + 1);
    };

    return (
        <div className="test-page">
            <div className="test-container test-container-counter">
                <MyButton label="Counter +1" onClick={clickCounter} /> 
                <p data-testid="counterValue">Counter: {counter}</p>
            </div>
            <div className="test-container test-container-fetch">
                {backendData
                    ? <XkcdComic data-testid="xkcd-comic-card" comicData={backendData} />
                    : <div data-testid="no-data-container">NO DATA YET!</div>
                }
            </div>
        </div>
    )
};