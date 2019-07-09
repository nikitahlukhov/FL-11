let game = confirm('Do you want to play a game?');
let i = 3;
let totalPrize = 0;
let prize = 100;
let baseRand = 9;
let randomNum = Math.floor(Math.random() * baseRand);
let number0 = 0;
let number1 = 1;
let number2 = 2;
let number3 = 3;
let number4 = 4;
let number8 = 8;
let number9 = 9;
let number100 = 100;


if (!game) {
  alert('You did not become a billionaire, but can.');
}

while (game) {
  console.log(randomNum)
  let number = Number(
    prompt(`Choose a roulette pocket number from 0 to ${baseRand - 1}
Attempts left: ${i}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${prize}$`)
  );
  if (number === randomNum) {
    alert(`Congratulation, you won! Your prize is: ${prize} $`);
    totalPrize += prize;
    let oneMore = confirm('Do you want to continue?');
    if (!oneMore) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      let playAgain = confirm('Do you want to play again?');
      if (playAgain) {
        i = number3;
        totalPrize = number0;
        prize = number100;
        randomNum = Math.floor(Math.random() * baseRand);
        game = true;
      }
    } else {
      baseRand += number4;
      if (i === number3) {
        prize *= number2;
      } else if (i === number2) {
        prize *= number4;
      } else if (i === number1) {
        prize *= number8;
      }
      i = number3;
      randomNum = Math.floor(Math.random() * baseRand);
      game = true;
    }
  } else if (number !== randomNum) {
    i--;
    prize -= prize / number2;
    if (i === number0) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      confirm('Do you want to play again?');
      baseRand = number9;
      i = number3;
      totalPrize = number0;
      prize = number100;
      randomNum = Math.floor(Math.random() * baseRand);
      game = true;
    }
  }
}
