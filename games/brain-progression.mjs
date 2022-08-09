import {
   question, randomNumber, correctAnswer, result, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainProgression() {
   const name = knowName("brain-progression")
   let countRight = 0;
   while (countRight < 3) {
      let num = randomNumber()
      const arrOfProgression = []
      let correctNum
      for (let i = randomNumber(); arrOfProgression.length <= 10; num += i) {
         arrOfProgression.push(num)
         correctNum = i
      }
      question("brain-progression", arrOfProgression.join(" "));
      let answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(false, answer, correctNum); break; }
      if (+answer === correctNum) { countRight += 1; correctAnswer(true) }
      else if (+answer !== correctNum) { correctAnswer(false, answer, correctNum); break; }
   }
   result(countRight, name)
}