const wordList = [
  "äpple",
  "gurka",
  "banan",
  "kille",
  "yacht",
  "stort",
  "flina",
];
const randomIndex = Math.floor(Math.random() * wordList.length);
const randomWord = wordList[randomIndex];

function matchWords() {
  // -----Correct Word-----
  let wordleAnswer = randomWord;
  // -----Correct Word-----

  // ----Guess ----
  let guessArr = "predu";
  // ----Guess----

  if (guessArr.length !== 5 || wordleAnswer.length !== 5) {
    console.log("Se till att både ordet och gissningen är 5 bokstäver långt");
  } else {
    let results = [];
    for (let i = 0; i < 5; i++) {
      let letterPosition = wordleAnswer.indexOf(guessArr[i]);
      if (letterPosition === -1) {
        results.push({ letter: guessArr[i], result: "incorrect" });
      } else {
        if (guessArr[i] === wordleAnswer[i]) {
          results.push({ letter: guessArr[i], result: "Correct" });
        } else {
          results.push({ letter: guessArr[i], result: "Misplaced" });
        }
      }
    }
    console.log(results);
    console.log(randomWord);
    module.exports = { randomWord, randomIndex, results };
  }
}

matchWords();
