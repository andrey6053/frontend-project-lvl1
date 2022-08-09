import {
  question, randomNumber, correctAnswer, result, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainGcd() {
  const name = knowName("brain-gcd")
  let countRight = 0;
  while (countRight < 3) {
    let num1 = randomNumber();
    let num2 = randomNumber();
    function NOD(x, y) {
      if (y > x) return NOD(y, x);
      if (!y) return x;
      return NOD(y, x % y);
    }
    let correctNum = NOD(num1, num2)
    question("brain-gcd", `${num1} ${num2}`);
    let answer = answerQuestion();
    if (isNaN(answer)) { correctAnswer(false, answer, correctNum); break; }
    if (+answer === correctNum) { countRight += 1; correctAnswer(true) }
    else if (+answer !== correctNum) { correctAnswer(false, answer, correctNum); break; }
  }
  result(countRight, name)
}