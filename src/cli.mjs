import readlineSync from 'readline-sync';

export const knowName = (game) => {
   console.log(`${game}\nWelcome to the Brain Games!`);
   const name = readlineSync.question("May I have your name? ");
   console.log(`Hello, ${name}`);
   return name;
};

export const randomNumber = () => Math.floor(Math.random() * 100);

export const question = (game, num) => {
   switch (game) {
      case "brain-even": console.log(`Answer "yes" if the number is even, otherwise answer "no"\nQuestion: ${num}`); break;
      case "brain-calc": console.log(`What is the result of the expression?\nQuestion: ${num}`); break;
      case "brain-gcd": console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${num}`); break;
      case "brain-progression": console.log(`Find the greatest common divisor of given numbers.\nQuestion: ${num}`); break;
      case "brain-prime": console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${num}`); break;
      default: break;
   }
};

export const answerQuestion = () => {
   const answer = readlineSync.question("Your answer:");
   return answer;
};

export const correctAnswer = (isCorrect = false, userAnswer, correct) => isCorrect ? console.log("Correct") : console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);

export const result = (count, name) => (count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`));
