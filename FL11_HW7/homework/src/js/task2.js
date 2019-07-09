let game = confirm('Do you want to play a game?');
let i = 3;
let totalPrize = 0;
let prize = 100;
let baseRand = 9;
let randomNum = Math.floor(Math.random() * baseRand);

if (!game) {
  alert('You did not become a billionaire, but can.');
}

while (game) {
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
        i = 3;
        totalPrize = 0;
        prize = 100;
        randomNum = Math.floor(Math.random() * baseRand);
        game = true;
      }
    } else {
      baseRand += 4;
      if (i === 3) {
        prize *= 2;
      } else if (i === 2) {
        prize *= 4;
      } else if (i === 1) {
        prize *= 8;
      }
      i = 3;
      randomNum = Math.floor(Math.random() * baseRand);
      game = true;
    }
  } else if (number !== randomNum) {
    i--;
    prize -= prize / 2;
    if (i === 0) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      confirm('Do you want to play again?');
      baseRand = 9;
      i = 3;
      totalPrize = 0;
      prize = 100;
      randomNum = Math.floor(Math.random() * baseRand);
      game = true;
    }
  }
}
