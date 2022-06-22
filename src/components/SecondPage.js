import React, { useEffect, useState } from "react";
import "./secondpage.css";

function SecondPage() {
  const [lvl, setLvl] = useState(1);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [info, setInfo] = useState("");
  const [word, setWord] = useState("");
  const [correct, setCorrect] = useState(0);
  const [userWord, setUserWord] = useState("");
  const [correctWord, setCorrectWord] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [infoColor, setInfoColor] = useState("");
  const [nextBtnDisable, setNextBtnDisable] = useState(false);

  useEffect(() => {
    setLevel();
  }, [lvl]);
  useEffect(() => {
    if (attempts === 5) {
      setInfoColor("red");
      setInfo("You lost! Reset and try again.");
      setBtnDisable(true);
      setNextBtnDisable(true);
    }
  }, [attempts]);

  const lvlOne = [
    "aim",
    "ace",
    "bed",
    "bee",
    "buy",
    "can",
    "cow",
    "cod",
    "cur",
    "did",
    "duo",
    "die",
    "dry",
    "dug",
    "elf",
    "egg",
    "elk",
    "fat",
    "fix",
    "fin",
    "few",
    "gym",
    "guy",
    "goo",
    "hen",
    "hag",
    "hic",
    "hut",
    "ill",
    "ice",
    "imp",
    "ink",
    "ivy",
    "jet",
    "job",
    "jaw",
    "jab",
    "keg",
    "kid",
    "lip",
    "leg",
    "lad",
    "let",
    "led",
    "law",
    "lid",
    "mut",
    "mat",
    "mud",
    "mid",
    "nit",
    "nog",
    "now",
    "oil",
    "owl",
    "oar",
    "off",
    "oat",
    "one",
    "pry",
    "pal",
    "peg",
    "pea",
    "pen",
    "pus",
    "rad",
    "rem",
    "rig",
    "rob",
    "saw",
    "sob",
    "sec",
    "shy",
    "sly",
    "tan",
    "the",
    "tic",
    "try",
    "cop",
    "uke",
    "ugh",
    "ups",
    "vat",
    "van",
    "vet",
    "woo",
    "wow",
    "wry",
    "wok",
    "yah",
    "yak",
    "yay",
    "you",
    "yep",
    "zit",
    "zap",
    "zig",
    "zag",
    "zip",
  ];

  const lvlTwo = [
    "able",
    "aced",
    "acid",
    "ally",
    "also",
    "arcs",
    "area",
    "arch",
    "aunt",
    "axis",
    "baby",
    "back",
    "ball",
    "babe",
    "bass",
    "bell",
    "bets",
    "bind",
    "bios",
    "book",
    "cabs",
    "case",
    "chef",
    "curl",
    "chat",
    "chap",
    "chin",
    "chum",
    "chop",
    "coal",
    "dabs",
    "dame",
    "damp",
    "dart",
    "dash",
    "dark",
    "deck",
    "deep",
    "diva",
    "dice",
    "easy",
    "ends",
    "epic",
    "etch",
    "evil",
    "expo",
    "exam",
    "face",
    "fact",
    "fail",
    "fair",
    "fall",
    "farm",
    "fave",
    "fart",
    "gain",
    "gays",
    "gets",
    "germ",
    "glad",
    "hams",
    "hats",
    "haze",
    "help",
    "head",
    "hers",
    "hike",
    "jabs",
    "junk",
    "jury",
    "kept",
    "keys",
    "kilt",
    "kiss",
    "lads",
    "lamp",
    "lean",
    "less",
    "mark",
    "mile",
    "mine",
    "name",
    "nuns",
    "obit",
    "obey",
    "pack",
    "pane",
    "palm",
    "pals",
    "raid",
    "reek",
    "rift",
    "repo",
    "sees",
    "seem",
    "self",
    "slip",
    "thin",
    "tied",
    "toes",
    "tofu",
    "tree",
    "ugly",
    "unto",
    "used",
    "vans",
    "visa",
    "wack",
    "wade",
    "wait",
    "wasp",
    "yams",
    "yarn",
    "yoyo",
    "zest",
    "zero",
    "zinc",
    "zips",
    "zone",
    "zonk",
  ];

  const lvlThree = [
    "abide",
    "about",
    "abort",
    "above",
    "adapt",
    "array",
    "aglow",
    "aisle",
    "angry",
    "ansty",
    "basic",
    "beers",
    "brisk",
    "bends",
    "berry",
    "below",
    "birdy",
    "blush",
    "bluff",
    "bolts",
    "cable",
    "champ",
    "chalk",
    "clams",
    "coded",
    "comet",
    "crack",
    "cycle",
    "daddy",
    "dance",
    "darts",
    "dated",
    "denim",
    "digit",
    "dingy",
    "dolly",
    "douse",
    "dryer",
    "duvet",
    "earth",
    "eased",
    "elope",
    "epoxy",
    "event",
    "exact",
    "equal",
    "fable",
    "fades",
    "false",
    "fever",
    "fiber",
    "fifty",
    "flaw",
    "flank",
    "froze",
    "fruit",
    "gamma",
    "gangs",
    "gawks",
    "gecko",
    "goofy",
    "goner",
    "guild",
    "hairy",
    "harem",
    "hedge",
    "hello",
    "helms",
    "honor",
    "image",
    "imply",
    "itchy",
    "issue",
    "ionic",
    "jacks",
    "japan",
    "jewel",
    "juice",
    "junky",
    "keeps",
    "kooky",
    "laced",
    "laces",
    "lamps",
    "laser",
    "leaky",
    "lynch",
    "mages",
    "mafia",
    "miles",
    "meats",
    "might",
    "mixer",
    "moths",
    "movie",
    "mushy",
    "named",
    "naval",
    "nears",
    "neigh",
    "newer",
    "nexus",
    "noise",
    "nooks",
    "north",
    "nutty",
    "ogres",
    "olive",
    "olive",
    "opens",
    "oxide",
    "owner",
    "paced",
    "palms",
    "pends",
    "pesky",
    "peppy",
    "petty",
    "phone",
    "phase",
    "porky",
    "pound",
    "pride",
    "print",
    "purse",
    "quack",
    "queen",
    "quart",
    "query",
    "quiet",
    "rafts",
    "rated",
    "react",
    "ready",
    "realm",
    "riced",
    "rides",
    "rigid",
    "rumor",
    "sadly",
    "safes",
    "saggy",
    "sails",
    "saint",
    "salsa",
    "sauce",
    "scone",
    "seeds",
    "scums",
    "sense",
    "shark",
    "sheds",
    "shout",
    "shove",
    "sides",
    "sixth",
    "skeet",
    "skill",
    "snots",
    "solid",
    "sound",
    "south",
    "spoil",
    "stall",
    "stole",
    "store",
    "sulks",
    "swamp",
    "sword",
    "syncs",
    "tempt",
    "texts",
    "texas",
    "today",
    "tonic",
    "topaz",
    "tried",
    "truth",
    "twigs",
    "typos",
    "udder",
    "unify",
    "using",
    "usual",
    "valid",
    "vapor",
    "venue",
    "vowel",
    "waked",
    "waist",
    "waxed",
    "whips",
    "whole",
    "wordy",
    "wreck",
    "yager",
    "yacht",
    "xenon",
    "yield",
    "yikes",
    "zincs",
    "zesty",
    "zones",
    "zincs",
    "zooms",
    "zeros",
    "yummy",
    "youth",
    "yogas",
    "yodle",
  ];

  function randomWord(lvl) {
    let temp = lvl[Math.floor(Math.random() * lvl.length + 1) - 1];
    let sWord = scrambleWord(temp);
    console.log(`sWord: ${sWord}`);
    // setUserWord(sWord);
    setCorrectWord(temp);
    setWord(sWord);
    console.log("temp", temp);
  }
  // function updateBoard() {
  //   setScore(score);
  //   setLvl(lvl);
  //   setAttempts(attempts);
  // }
  function resetGame() {
    setLvl(1);
    setInfo("");
    setCorrect(0);
    setScore(0);
    setAttempts(0);
  }

  function scrambleWord(word) {
    console.log("word", word);
    let letters = word.split("");
    console.log("letters", letters);
    let currentIndex = letters.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = letters[currentIndex];
      letters[currentIndex] = letters[randomIndex];
      letters[randomIndex] = temporaryValue;
    }
    console.log(`letters: ${letters}`);
    let letterjoin = letters.join("");
    console.log(`letterjoin: ${letterjoin}`);
    return letterjoin;
  }

  function checkAnswer(uWord) {
    let cWord = correctWord.toLowerCase();
    uWord = userWord.toLowerCase();
    console.log("cWord: ", cWord);
    if (correct === 10) {
      setLvl(lvl + 1);
      setCorrect(0);
    }
    if (attempts === 5) {
      console.log("you lost");
      // setInfo("Sorry, you lost!");
      resetGame();
    }
    // let cWord = userWord.join(" ");
    if (cWord === uWord) {
      setCorrect(correct + 1);
      setScore(score + 1);
      setAttempts(0);
      setInfoColor("green");
      setInfo("Correct!");
      console.log(uWord);
      setBtnDisable(true);
    } else {
      setAttempts(attempts + 1);
      setInfoColor("red");
      setInfo("Bzzzt! That's not right!");
    }
    // updateBoard();
  }

  function setLevel() {
    if (lvl === 1) {
      console.log("run lvl");
      randomWord(lvlOne);
    } else if (lvl === 2) {
      randomWord(lvlTwo);
    } else if (lvl === 3) {
      randomWord(lvlThree);
    } else if (lvl === 4) {
      setInfoColor("Green");
      setInfo("You won!");
    }
    // console.log("word", word);
    // let sWord = scrambleWord(word);
    // console.log(`sWord: ${sWord}`);
    // setUsersWord(sWord);
    // setUsersWord(
    //   return scrambleWord(word);
    // );
  }
  function nextBtn() {
    setLevel();
    setInfo("");
    setUserWord("");
    setAttempts(0);
    setBtnDisable(false);
  }

  // function submitHandle(e) {
  //   checkAnswer();
  // }
  // const submitHandle = () => {
  //   setWord1((prev) => {
  //     console.log(prev);
  //     return "red";
  //   });
  // };
  return (
    <div className="secondpage-container">
      <div id="game-container">
        <div className="scores-info">
          <p>
            Level: <span id="level">{lvl}</span>
          </p>
          <p>
            Score: <span id="score">{score}</span>
          </p>
          <p>
            Attempts: <span id="attempts">{attempts}</span>
          </p>
        </div>
        <p id="info" style={{ color: `${infoColor} ` }}>
          {info}
        </p>
        <div id="guess-container">
          <p id="scrambled-word">{word}</p>
          <input
            autoComplete="off"
            id="user-guess"
            type="text"
            value={userWord}
            onChange={(e) => setUserWord(e.target.value.toLowerCase())}
            placeholder="Enter your guess"
          />
          <button
            type="button"
            disabled={btnDisable}
            onClick={checkAnswer}
            id="submit"
          >
            Submit
          </button>
          <button
            type="button"
            disabled={nextBtnDisable}
            onClick={nextBtn}
            id="next-btn"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
