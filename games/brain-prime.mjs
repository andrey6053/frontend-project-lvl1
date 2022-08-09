import {
   question, randomNumber, correctAnswer, result, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainPrime() {
   const name = knowName("brain-prime")
   let countRight = 0;
   let arrEasy = []
   nextPrime:
   for (let i = 2; i <= 100; i++) {
      for (let j = 2; j < i; j++) {
         if (i % j == 0) continue nextPrime;
      }
      arrEasy.push(i)
   }
   while (countRight < 3) {
      let num = randomNumber()
      let isEasy = false
      if (arrEasy.includes(num)) isEasy = true;
      question("brain-prime", `${num}`);
      let answer = answerQuestion();
      if (answer.trim() !== "yes" && answer !== "no") {
         break;
      }
      if (isEasy && answer === "yes") {
         countRight += 1; correctAnswer(true)
      } else if (!isEasy && answer === "no") {
         countRight += 1; correctAnswer(true)
      } else {
         correctAnswer(false, answer, isEasy ? "yes" : "no"); break;
      }
   }
   result(countRight, name)
}