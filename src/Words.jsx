import { useEffect, useState } from "react";

const URL_GET_WORDS = "https://random-word-api.vercel.app/api?words=";

const Words = function () {
    const [wordList, setWordList] = useState([]);

    async function fetchWords(num) {
        const promise = await fetch(URL_GET_WORDS + num);
        const processed = await promise.json();
        setWordList(processed);
    }

    function updateScore(num) {
        const scoreDisplay = document.querySelector(".score");
        scoreDisplay.innerText = num;
    }

    useEffect(() => {
        fetchWords(10);
        updateScore(10);
    }, []);

    function changeWords() {
        const input = document.querySelector(".input-num");
        fetchWords(input.value);
        updateScore(wordList.length);
    }

    function removeWord() {
        const currInput = document.querySelector(".type-input");
        const wordDisplay = document.querySelector("h2");
        const warningDisplay = document.querySelector(".warning");
        if (currInput.value === wordList[0]) {
            wordList.shift();
            wordDisplay.innerText = wordList.join(" ");
            currInput.value = "";
            updateScore(wordList.length);
        } else {
            warningDisplay.style.display = "block";
        }
    }

    return (
        <div className="word-container">
            <h2>{wordList.join(" ")}</h2>
            <div className="input-section">
                <input className="input-num" type="number" placeholder="10" />
                <button className="btn-submit" onClick={changeWords}>Submit</button>
            </div>
            <div className="input-words">
                <div className="warning">Wrong Word!</div>
                <input className="type-input" type="text" onKeyDown={
                    (e) => {
                        if (e.key === "Enter") {
                            removeWord();
                        }
                    }
                } />
            </div>
            <div className="score"></div>
        </div>
    )
}

export default Words;