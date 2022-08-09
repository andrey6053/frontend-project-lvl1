import {
   question, randomNumber, correctAnswer, result, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainProgression() {
   const name = knowName("brain-progression")
   let countRight = 0;
   while (countRight < 3) {
      let len = Math.floor(Math.random() * (10 - 5) + 5)
      let index = Math.floor(Math.random() * len)
      let num = randomNumber()
      const arrOfProgression = []
      for (let i = randomNumber(); arrOfProgression.length <= len; num += i) {
         arrOfProgression.push(num)
      }
      let correctNum = arrOfProgression[index]
      arrOfProgression[index] = ".."
      question("brain-progression", arrOfProgression.join(" "));
      let answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(false, answer, correctNum); break; }
      if (+answer === correctNum) { countRight += 1; correctAnswer(true) }
      else if (+answer !== correctNum) { correctAnswer(false, answer, correctNum); break; }
   }
   result(countRight, name)
}