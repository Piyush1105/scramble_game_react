import React from "react";
import "./firstpage.css";
import { Link } from "react-router-dom";

function FirstPage() {
  return (
    <div className="firstpage-container">
      <h1>Scrambled Words</h1>
      <div id="rules">
        <p className="lead">1. Unscramble the words.</p>
        <p>2. Type in your guess.</p>
        <p>3. Get 10 correct and level up.</p>
        <p>4. Get a word wrong 5 times and restart.</p>
        <p>5. Finish level 3 and you win.</p>
        <p>6. Good luck!</p>
      </div>
      <Link to="/play">
        <button id="play-btn" className="button-49">
          Let's Play
        </button>
      </Link>
    </div>
  );
}

export default FirstPage;
