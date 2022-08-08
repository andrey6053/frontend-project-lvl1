import {
  knowName, question, randomNumber, correctAnswer, result, answerQuestion,
} from "./cli.mjs";

export default function branEven() {
  const name = knowName();
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
      console.log("Correct!");
    } else if (num % 2 !== 0 && answer === "no") {
      countRight += 1;
      console.log("Correct!");
    } else if (num % 2 === 0 && answer === "no") {
      correctAnswer(answer, "yes");
      break;
    } else if (num % 2 !== 0 && answer === "yes") {
      correctAnswer(answer, 'no');
      break;
    }
  }
  return result(countRight, name);
}

branEven();
