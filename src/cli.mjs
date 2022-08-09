import readlineSync from 'readline-sync';

export const knowName = () => {
   console.log(`brain-games\nWelcome to the Brain Games!`);
   const name = readlineSync.question("May I have your name? ");
   console.log(`Hello, ${name}`);
   return name;
};

export const randomNumber = () => Math.floor(Math.random() * 100);

export const question = (game, num, num2, type) => {
   switch (game) {
      case "brain-even": console.log(`Answer "yes" if the number is even, otherwise answer "no"\nQuestion: ${num}`); break;
      case "brain-calc": console.log(`What is the result of the expression?\nQuestion: ${num} ${type} ${num2}`); break;
      default: break;
   }
};

export const answerQuestion = () => {
   const answer = readlineSync.question("Your answer:");
   return answer;
};

export const correctAnswer = (userAnswer, correct) => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.`);

export const result = (count, name) => (count === 3 ? console.log(`Congratulations, ${name}!`) : console.log(`Let's try again, ${name}!`));
