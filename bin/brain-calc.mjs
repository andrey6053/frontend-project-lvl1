import {
   knowName, question, randomNumber, result, correctAnswer, answerQuestion,
} from "./cli.mjs";

export default function brainCalc() {
   const name = knowName();
   let countRight = 0;
   while (countRight < 3) {
      let num1 = randomNumber();
      let num2 = randomNumber();
      const sum = num1 + num2;
      question("brain-calc", num1, num2, "+");
      let answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(answer, sum); break; }
      if (+answer === sum) { countRight++; console.log("Correct"); } else if (+answer !== sum) { correctAnswer(answer, sum); break; }

      num1 = randomNumber();
      num2 = randomNumber();
      const decr = num1 - num2;
      question("brain-calc", num1, num2, "-");
      answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(answer, decr); break; }
      if (+answer === decr) { countRight++; console.log("Correct"); } else if (+answer !== decr) { correctAnswer(answer, decr); break; }

      num1 = randomNumber();
      num2 = randomNumber();
      const mult = num1 * num2;
      question("brain-calc", num1, num2, "*");
      answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(answer, mult); break; }
      if (+answer === mult) { countRight++; console.log("Correct"); } else if (+answer !== mult) { correctAnswer(answer, mult); break; }
   }
   result(countRight, name);
}

brainCalc();
