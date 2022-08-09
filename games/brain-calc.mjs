import {
   question, randomNumber, result, correctAnswer, answerQuestion,
} from "../src/cli.mjs";

export default function brainCalc() {
   const name = knowName()
   let countRight = 0;
   const arrOfOperators = ["+", "-", "*"]
   for (let i in arrOfOperators) {
      let num1 = randomNumber();
      let num2 = randomNumber();
      const sum = num1 + num2;
      const decr = num1 - num2;
      const mult = num1 * num2;
      question("brain-calc", num1, num2, arrOfOperators[i]);
      let answer = answerQuestion();
      if (isNaN(answer)) { correctAnswer(answer, arrOfOperators[i] === "+" ? sum : arrOfOperators[i] === "-" ? decr : mult); break; }
      switch (arrOfOperators[i]) {
         case "+":
            if (+answer === sum) { countRight++; console.log("Correct"); } else { correctAnswer(answer, sum); return }
            break
         case "-":
            if (+answer === decr) { countRight++; console.log("Correct"); } else { correctAnswer(answer, decr); return }
            break
         case "*":
            if (+answer === mult) { countRight++; console.log("Correct"); } else { correctAnswer(answer, mult); return }
            break
      }
   }
   result(countRight, name);
}
