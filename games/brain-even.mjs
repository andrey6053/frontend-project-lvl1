import {
  question, randomNumber, correctAnswer, result, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainEven() {
  const name = knowName("brain-even")
  let countRight = 0;
  while (countRight < 3) {
    const num = randomNumber();
    question("brain-even", num);
    const answer = answerQuestion();
    if (answer !== "yes" && answer !== "no") {
      break;
    }
    if (num % 2 === 0 && answer === "yes") {
      countRight += 1;
      correctAnswer(true);
    } else if (num % 2 !== 0 && answer === "no") {
      countRight += 1;
      correctAnswer(true);
    } else if (num % 2 === 0 && answer === "no") {
      correctAnswer(false, answer, "yes");
      break;
    } else if (num % 2 !== 0 && answer === "yes") {
      correctAnswer(false, answer, 'no');
      break;
    }
  }
  return result(countRight, name);
}
