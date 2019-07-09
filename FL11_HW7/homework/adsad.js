let randmNum = Math.floor(Math.random() * 9);
    console.log(randmNum);
    let userNumber = Number(prompt('Please enter a number from 0 to 8 (including 8)'));
    
    if (userNumber === randmNum) {
       let answer =  confirm('Congratulation, you won!   Your prize is: 100 $. Do you want to continue?')
        if (answer === false) {
            alert('Thank you for your participation. Your prize is: 100 $')
            confirm('Do You want to play again?')
        }
      } else {
        let userNumber = Number(prompt('Please enter a number from 0 to 8 (including 8)'));
        if (userNumber === randmNum) {
            let answer =  confirm('Congratulation, you won!   Your prize is: 50 $. Do you want to continue?')
      } else {
        let userNumber = Number(prompt('Please enter a number from 0 to 8 (including 8)'));
        if (userNumber === randmNum) {
            let answer =   confirm('Congratulation, you won!   Your prize is: 25 $. Do you want to continue?')
      } else {
        alert('Thank you for your participation. Your prize is: … $');
        confirm('Do you want to continue?');

      }
    
    }
    }


    if (number === randomNum) {
        alert(`Congratulation, you won!   Your prize is: ${prize} $`); 
        let oneMore =  confirm('Do you want to continue?') 
        if (!oneMore) { 
            alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
            let playAgain = confirm('Do you want to play again?')
            if (playAgain) {
                number = Number(prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${i}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize}$`));   
            }
        }  else {
            prize*=2;
            i=3;
            randomNum;
            totalPrize+=100;
            number = Number(prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${i}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize}$`));
        }
    } else {
       let number = Number(prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${i-1}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize - 50}$`))
        if (number === randomNum) {
            alert(`Congratulation, you won!   Your prize is: ${prize - 50} $`);
            let oneMore =  confirm('Do you want to play again?')
        } else {
            let number = Number(prompt(`Choose a roulette pocket number from 0 to 8\nAttempts left: ${i-2}\nTotal prize: ${totalPrize}$\nPossible prize on current attempt: ${prize - 75}$`))
            if (number === randomNum) {
                alert(`Congratulation, you won!   Your prize is: ${prize - 75} $`);
                let oneMore =  confirm('Do you want to play again?')

            } else {
                alert('Thank you for your participation. Your prize is: 0 $')
                let playAgain = confirm('Do you want to play again?')
            }
        }
    }   