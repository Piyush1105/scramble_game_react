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
  const [correctWord, setCorrectWord] = useState([]);
  const [btnDisable, setBtnDisable] = useState(false);
  const [infoColor, setInfoColor] = useState("");
  const [nextBtnDisable, setNextBtnDisable] = useState(true);
  const [notRandomKeyAgain, setNotRandomKeyAgain] = useState([]);

  useEffect(() => {
    setLevel();
  }, [lvl]);
  useEffect(() => {
    if (correct === 10) {
      setCorrect(0);
      setLvl(lvl + 1);
      // console.log("correct: ", correct);
    }
    if (attempts === 5) {
      setInfoColor("red");
      setInfo("You lost! Reset and try again.");
      setBtnDisable(true);
      setNextBtnDisable(true);
    }
    if (lvl === 4) {
      setInfoColor("Green");
      setInfo("Congratulations!!! You won!");
      setBtnDisable(true);
      setNextBtnDisable(true);
    }
  }, [attempts, correct, lvl]);

  const lvlOne = {
    tap: ["tap", "pat", "apt"],
    aim: ["aim"],
    ace: ["ace"],
    bed: ["bed"],
    bee: ["bee"],
    buy: ["buy"],
    can: ["can"],
    cow: ["cow"],
    cod: ["cod"],
    cur: ["cur"],
    did: ["did"],
    duo: ["duo"],
    die: ["die"],
    dry: ["dry"],
    dug: ["dug"],
    elf: ["elf"],
    egg: ["egg"],
    elk: ["elk"],
    fat: ["fat"],
    fix: ["fix"],
    fin: ["fin"],
    few: ["few"],
    gym: ["gym"],
    guy: ["guy"],
    goo: ["goo"],
    hen: ["hen"],
    hag: ["hag"],
    hic: ["hic"],
    hut: ["hut"],
    ill: ["ill"],
    ice: ["ice"],
    imp: ["imp"],
    ink: ["ink", "kin"],
    ivy: ["ivy"],
    jet: ["jet"],
    job: ["job"],
    jaw: ["jaw"],
    jab: ["jab"],
    keg: ["keg"],
    kid: ["kid"],
    lip: ["lip"],
    leg: ["leg"],
    lad: ["lad"],
    let: ["let"],
    led: ["led"],
    law: ["law"],
    lid: ["lid"],
    mut: ["mut"],
    mat: ["mat"],
    mud: ["mud"],
    mid: ["mid", "dim"],
    nit: ["nit", "tin"],
    nog: ["nog"],
    now: ["now", "won"],
    oil: ["oil"],
    owl: ["owl", "low"],
    oar: ["oar"],
    off: ["off"],
    oat: ["oat"],
    one: ["one"],
    pry: ["pry"],
    pal: ["pal", "lap"],
    peg: ["peg"],
    pea: ["pea"],
    pen: ["pen"],
    pus: ["pus"],
    rad: ["rad"],
    rem: ["rem"],
    rig: ["rig"],
    rob: ["rob"],
    saw: ["saw"],
    sob: ["sob"],
    sec: ["sec"],
    shy: ["shy"],
    sly: ["sly"],
    tan: ["tan", "ant", "nat"],
    the: ["the"],
    tic: ["tic"],
    try: ["try"],
    cop: ["cop"],
    uke: ["uke"],
    ugh: ["ugh"],
    ups: ["ups", "sup", "pus"],
    vat: ["vat"],
    van: ["van"],
    vet: ["vet"],
    woo: ["woo"],
    wow: ["wow"],
    wry: ["wry"],
    wok: ["wok"],
    yah: ["yah", "hay"],
    yak: ["yak"],
    yay: ["yay"],
    you: ["you"],
    yep: ["yep"],
    zit: ["zit"],
    zap: ["zap"],
    zig: ["zig"],
    zag: ["zag"],
    zip: ["zip"],
  };

  // const lvlTwo = [
  //   "able",
  //   "aced",
  //   "acid",
  //   "ally",
  //   "also",
  //   "arcs",
  //   "area",
  //   "arch",
  //   "aunt",
  //   "axis",
  //   "baby",
  //   "back",
  //   "ball",
  //   "babe",
  //   "bass",
  //   "bell",
  //   "bets",
  //   "bind",
  //   "bios",
  //   "book",
  //   "cabs",
  //   "case",
  //   "chef",
  //   "curl",
  //   "chat",
  //   "chap",
  //   "chin",
  //   "chum",
  //   "chop",
  //   "coal",
  //   "dabs",
  //   "dame",
  //   "damp",
  //   "dart",
  //   "dash",
  //   "dark",
  //   "deck",
  //   "deep",
  //   "diva",
  //   "dice",
  //   "easy",
  //   "ends",
  //   "epic",
  //   "etch",
  //   "evil",
  //   "expo",
  //   "exam",
  //   "face",
  //   "fact",
  //   "fail",
  //   "fair",
  //   "fall",
  //   "farm",
  //   "fave",
  //   "fart",
  //   "gain",
  //   "gays",
  //   "gets",
  //   "germ",
  //   "glad",
  //   "hams",
  //   "hats",
  //   "haze",
  //   "help",
  //   "head",
  //   "hers",
  //   "hike",
  //   "jabs",
  //   "junk",
  //   "jury",
  //   "kept",
  //   "keys",
  //   "kilt",
  //   "kiss",
  //   "lads",
  //   "lamp",
  //   "lean",
  //   "less",
  //   "mark",
  //   "mile",
  //   "mine",
  //   "name",
  //   "nuns",
  //   "obit",
  //   "obey",
  //   "pack",
  //   "pane",
  //   "palm",
  //   "pals",
  //   "raid",
  //   "reek",
  //   "rift",
  //   "repo",
  //   "sees",
  //   "seem",
  //   "self",
  //   "slip",
  //   "thin",
  //   "tied",
  //   "toes",
  //   "tofu",
  //   "tree",
  //   "ugly",
  //   "unto",
  //   "used",
  //   "vans",
  //   "visa",
  //   "wack",
  //   "wade",
  //   "wait",
  //   "wasp",
  //   "yams",
  //   "yarn",
  //   "yoyo",
  //   "zest",
  //   "zero",
  //   "zinc",
  //   "zips",
  //   "zone",
  //   "zonk",
  // ];

  const lvlTwo = {
    able: ["able", "beal", "blae"],
    aced: ["aced", "dace", "cade"],
    acid: ["acid", "caid"],
    ally: ["ally"],
    also: ["also"],
    arcs: ["arcs"],
    area: ["area"],
    arch: ["arch"],
    aunt: ["aunt"],
    axis: ["axis"],
    baby: ["baby"],
    back: ["back"],
    ball: ["ball"],
    babe: ["babe"],
    bass: ["bass"],
    bell: ["bell"],
    bets: ["bets"],
    bind: ["bind"],
    bios: ["bios"],
    book: ["book"],
    cabs: ["cabs"],
    case: ["case"],
    chef: ["chef"],
    curl: ["curl"],
    chat: ["chat"],
    chap: ["chap"],
    chin: ["chin"],
    chum: ["chum"],
    chop: ["chop"],
    coal: ["coal"],
    dabs: ["dabs"],
    dame: ["dame"],
    damp: ["damp"],
    dart: ["dart"],
    dash: ["dash"],
    dark: ["dark"],
    deck: ["deck"],
    deep: ["deep"],
    diva: ["diva"],
    dice: ["dice"],
    easy: ["easy"],
    ends: ["ends"],
    epic: ["epic"],
    etch: ["etch"],
    evil: ["evil"],
    expo: ["expo"],
    exam: ["exam"],
    face: ["face"],
    fact: ["fact"],
    fail: ["fail"],
    fair: ["fair"],
    fall: ["fall"],
    farm: ["farm"],
    fave: ["fave"],
    fart: ["fart"],
    gain: ["gain"],
    gays: ["gays"],
    gets: ["gets", "gest"],
    germ: ["germ"],
    glad: ["glad"],
    hams: ["hams"],
    haze: ["haze"],
    help: ["help"],
    head: ["help"],
    hers: ["hers"],
    hike: ["hike"],
  };
  // const lvlThree = [
  //   "abide",
  //   "about",
  //   "abort",
  //   "above",
  //   "adapt",
  //   "array",
  //   "aglow",
  //   "aisle",
  //   "angry",
  //   "ansty",
  //   "basic",
  //   "beers",
  //   "brisk",
  //   "bends",
  //   "berry",
  //   "below",
  //   "birdy",
  //   "blush",
  //   "bluff",
  //   "bolts",
  //   "cable",
  //   "champ",
  //   "chalk",
  //   "clams",
  //   "coded",
  //   "comet",
  //   "crack",
  //   "cycle",
  //   "daddy",
  //   "dance",
  //   "darts",
  //   "dated",
  //   "denim",
  //   "digit",
  //   "dingy",
  //   "dolly",
  //   "douse",
  //   "dryer",
  //   "duvet",
  //   "earth",
  //   "eased",
  //   "elope",
  //   "epoxy",
  //   "event",
  //   "exact",
  //   "equal",
  //   "fable",
  //   "fades",
  //   "false",
  //   "fever",
  //   "fiber",
  //   "fifty",
  //   "flaw",
  //   "flank",
  //   "froze",
  //   "fruit",
  //   "gamma",
  //   "gangs",
  //   "gawks",
  //   "gecko",
  //   "goofy",
  //   "goner",
  //   "guild",
  //   "hairy",
  //   "harem",
  //   "hedge",
  //   "hello",
  //   "helms",
  //   "honor",
  //   "image",
  //   "imply",
  //   "itchy",
  //   "issue",
  //   "ionic",
  //   "jacks",
  //   "japan",
  //   "jewel",
  //   "juice",
  //   "junky",
  //   "keeps",
  //   "kooky",
  //   "laced",
  //   "laces",
  //   "lamps",
  //   "laser",
  //   "leaky",
  //   "lynch",
  //   "mages",
  //   "mafia",
  //   "miles",
  //   "meats",
  //   "might",
  //   "mixer",
  //   "moths",
  //   "movie",
  //   "mushy",
  //   "named",
  //   "naval",
  //   "nears",
  //   "neigh",
  //   "newer",
  //   "nexus",
  //   "noise",
  //   "nooks",
  //   "north",
  //   "nutty",
  //   "ogres",
  //   "olive",
  //   "olive",
  //   "opens",
  //   "oxide",
  //   "owner",
  //   "paced",
  //   "palms",
  //   "pends",
  //   "pesky",
  //   "peppy",
  //   "petty",
  //   "phone",
  //   "phase",
  //   "porky",
  //   "pound",
  //   "pride",
  //   "print",
  //   "purse",
  //   "quack",
  //   "queen",
  //   "quart",
  //   "query",
  //   "quiet",
  //   "rafts",
  //   "rated",
  //   "react",
  //   "ready",
  //   "realm",
  //   "riced",
  //   "rides",
  //   "rigid",
  //   "rumor",
  //   "sadly",
  //   "safes",
  //   "saggy",
  //   "sails",
  //   "saint",
  //   "salsa",
  //   "sauce",
  //   "scone",
  //   "seeds",
  //   "scums",
  //   "sense",
  //   "shark",
  //   "sheds",
  //   "shout",
  //   "shove",
  //   "sides",
  //   "sixth",
  //   "skeet",
  //   "skill",
  //   "snots",
  //   "solid",
  //   "sound",
  //   "south",
  //   "spoil",
  //   "stall",
  //   "stole",
  //   "store",
  //   "sulks",
  //   "swamp",
  //   "sword",
  //   "syncs",
  //   "tempt",
  //   "texts",
  //   "texas",
  //   "today",
  //   "tonic",
  //   "topaz",
  //   "tried",
  //   "truth",
  //   "twigs",
  //   "typos",
  //   "udder",
  //   "unify",
  //   "using",
  //   "usual",
  //   "valid",
  //   "vapor",
  //   "venue",
  //   "vowel",
  //   "waked",
  //   "waist",
  //   "waxed",
  //   "whips",
  //   "whole",
  //   "wordy",
  //   "wreck",
  //   "yager",
  //   "yacht",
  //   "xenon",
  //   "yield",
  //   "yikes",
  //   "zincs",
  //   "zesty",
  //   "zones",
  //   "zincs",
  //   "zooms",
  //   "zeros",
  //   "yummy",
  //   "youth",
  //   "yogas",
  //   "yodle",
  // ];

  const lvlThree = {
    abide: ["abide"],
    about: ["about"],
    above: ["above"],
    adapt: ["adapt"],
    array: ["array"],
    aglow: ["aglow"],
    aisle: ["aisle"],
    angry: ["angry"],
    apart: ["apart"],
    ansty: ["ansty"],
    apple: ["apple"],
    april: ["april"],
    basic: ["basic"],
    beers: ["beers"],
    bikes: ["bikes"],
    birds: ["birds"],
    black: ["black"],
    blank: ["blank"],
    brisk: ["brisk"],
    broad: ["broad"],
    bends: ["bends"],
    berry: ["berry"],
    below: ["below"],
    birdy: ["birdy"],
    blush: ["blush"],
    bluff: ["bluff"],
    bolts: ["bolts"],
    cable: ["cable"],
    champ: ["champ"],
    chalk: ["chalk"],
    clams: ["clams"],
    coded: ["coded"],
    comet: ["comet"],
    crack: ["crack"],
    crags: ["crags"],
    cramp: ["cramp"],
    crank: ["crank"],
    crays: ["crays"],
    creak: ["creak"],
    creed: ["creed"],
    cycle: ["cycle"],
    daddy: ["daddy"],
    dance: ["dance"],
    darts: ["darts"],
    dated: ["dated"],
    denim: ["denim"],
  };
  // console.log("Correct: ", correct);
  //generates a random word from the object
  function randomWord(lvl) {
    const keys = Object.keys(lvl);
    // console.log(keys);
    let temp = keys[Math.floor(Math.random() * keys.length)];
    // console.log("temp :", temp);
    let arr = [];
    if (notRandomKeyAgain.includes(temp)) {
      randomWord(lvl);
    } else {
      setNotRandomKeyAgain([...notRandomKeyAgain, temp]);
      for (let i = 0; i < lvl[temp].length; i++) {
        arr.push(lvl[temp][i]);
      }

      // console.log(arr);
      // notRandomKeyAgain.push(temp);

      let sWord = scrambleWord(temp);
      // console.log(`sWord: ${sWord}`);
      // setUserWord(sWord);
      setCorrectWord(arr);
      setWord(sWord);
    }

    // console.log("temp", temp);
    // console.log("notRandomKeyAgain: ", notRandomKeyAgain);
  }

  //resets the game on lost
  function resetGame() {
    setLvl(1);
    setInfo("");
    setCorrect(0);
    setScore(0);
    setAttempts(0);
  }

  //scrambles the word
  function scrambleWord(word) {
    // console.log("word", word);
    let letters = word.split("");
    // console.log("letters", letters);
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
    // console.log(`letters: ${letters}`);
    let letterjoin = letters.join("");
    // console.log(`letterjoin: ${letterjoin}`);
    return letterjoin;
  }

  function checkAnswer(uWord) {
    uWord = userWord.toLowerCase();

    if (attempts === 5) {
      // console.log("you lost");
      resetGame();
    }

    if (correctWord.includes(uWord)) {
      setCorrect(correct + 1);
      setScore(score + 1);
      setAttempts(0);
      setInfoColor("green");
      setInfo("Correct!");
      setNextBtnDisable(false);
      // console.log(uWord);
      setBtnDisable(true);
    } else {
      setAttempts(attempts + 1);
      setInfoColor("red");
      setInfo("Bzzzt! That's not right!");
    }
  }

  //to check level and show word according to it
  function setLevel() {
    if (lvl === 1) {
      // console.log("run lvl");
      randomWord(lvlOne);
    } else if (lvl === 2) {
      randomWord(lvlTwo);
    } else if (lvl === 3) {
      randomWord(lvlThree);
    }
  }

  //for next btn
  function nextBtn() {
    setLevel();
    setInfo("");
    setUserWord("");
    setAttempts(0);
    setBtnDisable(false);
    setNextBtnDisable(true);
  }

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
            onChange={(e) => setUserWord(e.target.value)}
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
