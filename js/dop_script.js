"use strict";

let guessNumber = () => {
    let myNumber = getRandomInt(1, 11);
    let count = 10;
    console.log ('count равно', count);

    let notification = () => {
        count--;
        if (count < 1) {
            alert ('У Вас закончились попытки((')
        }
        else {
            let number = prompt('Угадайте, загаднное число');
            if (number === null) {
            alert ('Всего доброго!')
            }
            else if (number == myNumber) {
                alert ('Поздравляю, вы угадали число!!!');
                let answer = confirm ('Желаете сыграть ещё раз?')
                if (answer == true) {
                    count = 10;
                    notification();
                }
                else {
                    alert ('Всего доброго!')
                }
            }
            else if (number > myNumber) {
                alert ('Загаданное число меньше');
                console.log (`Осталоь ${count} попыток`);
                notification();
            }
            else if (number < myNumber) {
                alert ('Загаданное число больше');
                console.log (`Осталоь ${count} попыток`);
                notification();
            }
        }
        
    }
    notification();
    
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

guessNumber();


