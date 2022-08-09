import {
   question, randomNumber, result, correctAnswer, answerQuestion, knowName,
} from "../src/cli.mjs";

export default function brainCalc() {
   const name = knowName("brain-calc")
   let countRight = 0;
   const arrOfOperators = ["+", "-", "*"]
   for (let i in arrOfOperators) {
      let num1 = randomNumber();
      let num2 = randomNumber();
      const sum = num1 + num2;
      const decr = num1 - num2;
      const mult = num1 * num2;
      let answer
      switch (arrOfOperators[i]) {
         case "+":
            question("brain-calc", `${num1} + ${num2}`);
            answer = answerQuestion();
            if (+answer === sum) { countRight++; correctAnswer(true); } else { correctAnswer(false, answer, sum); return }
            break
         case "-":
            question("brain-calc", `${num1} - ${num2}`);
            answer = answerQuestion();
            if (+answer === decr) { countRight++; correctAnswer(true); } else { correctAnswer(false, answer, decr); return }
            break
         case "*":
            question("brain-calc", `${num1} * ${num2}`);
            answer = answerQuestion();
            if (+answer === mult) { countRight++; correctAnswer(true); } else { correctAnswer(false, answer, mult); return }
            break
         default:
            correctAnswer(false, answer, arrOfOperators[i] === "+" ? sum : arrOfOperators[i] === "-" ? decr : mult); break;
      }
   }
   result(countRight, name);
}
