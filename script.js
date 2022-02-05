const setOfWords = [
  "This is not just a random grab at topicality but a surprisingly cogent decision.",
  "His stories do not conclude, but simply stop dead with a random act of violence.",
  "They were weighted and thought out and they weren't random sporadic decisions.",
  "In science, observations are not any random facts that investigators happen to have registered.",
];

const msg = document.getElementById("msg");
const textArea = document.getElementById("myWords");
const btn = document.getElementById("btn");
let startTime, endTime;

const playGame = () => {
  let x = Math.floor(Math.random() * setOfWords.length);
  let randomSentence = setOfWords[x];
  msg.innerText = randomSentence;
  let date = new Date();
  startTime = date.getTime();
  btn.innerText = "Done";
};

const endGame = () => {
  let date = new Date();
  endTime = date.getTime();
  let totalTime = (endTime - startTime) / 1000;

  let totalStr = textArea.value;
  let wordCount = wordCounter(totalStr);

  let speed = Math.round((wordCount / totalTime) * 60);

  let finalMsg = `You typing Speed is ${speed} words per minutes, `;

  finalMsg += compareWords(msg.innerText, totalStr);

  msg.innerText = finalMsg;
};

const compareWords = (str1, str2) => {
  let words1 = str1.split(" ");
  let words2 = str2.split(" ");
  let cnt = 0;

  words1.forEach(function (item, index) {
    if (item === words2[index]) {
      cnt++;
    }
  });

  let errorWords = words1.length - cnt;
  return (
    cnt +
    " correct out of " +
    words1.length +
    " words and the total number of errors are " +
    errorWords +
    "."
  );
};

const wordCounter = (str) => {
  return str.split(" ").length;
};

btn.addEventListener("click", function () {
  if (btn.innerHTML === "Start") {
    textArea.disabled = false;
    textArea.value = "";
    playGame();
  } else if (this.innerText === "Done") {
    textArea.disabled = true;
    btn.innerText = "Start";
    endGame();
  }
});
