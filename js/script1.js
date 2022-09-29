"use strict";

// console.log('__________');
// console.log('ДЗ-1');

let money = 60000;
let purpose = 1000000;
let amount, extraMoney;
// let profit = "Пенсия";
// let expenses = 'Питание, Проезд, Одежда, Развлечения';
// let period = 12;

// console.log('__________');
// console.log('Задание 1');
// console.log(`Тип данных money: ${typeof money}`);
// console.log('Тип данных profit:', typeof profit);

// console.log('__________');
// console.log('Задание 2');
// console.log(`Длина строки expenses составялет: ${expenses.length} символов`)

// console.log('__________');
// console.log('Задание 3');
// console.log(`Период равен ${period} месяцев`);
// console.log(`Цель заработать ${purpose} рублей`);

// console.log('__________');
// console.log('Задание 4');
// let budgetDay = money / 30;
// console.log(`Дневной бюджет составялет: ${budgetDay} рублей`);

// console.log('__________');
// console.log('Усложненное задание');
// let expensesLowerCase = expenses.toLowerCase();
// let arrayOfStrings = expensesLowerCase.split(", ");

// console.log(`Исходный текст: \n ${expenses}`);
// console.log(`Исходный текст со всеми строчными буквами: \n ${expensesLowerCase}`);
// console.log(`0 элемент массива: ${arrayOfStrings[0]}`);
// console.log(`1 элемент массива: ${arrayOfStrings[1]}`);
// console.log(`2 элемент массива: ${arrayOfStrings[2]}`);
// console.log(`3 элемент массива: ${arrayOfStrings[3]}`);
// console.log(`Массив: ${arrayOfStrings} \n и его длина - ${arrayOfStrings.length}`);

// console.log('__________');
// console.log('ДЗ-2');

// console.log('__________');
// console.log('Задание 1');
do {
    money = prompt('Ваш месячный доход?', '');
} while (isNaN(money));
console.log(`Ваш месячный доход (money) составляет: ${money}`);

// console.log('__________');
// console.log('Задание 2');
// expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', '');
// console.log(`Ваши статьи расхода: ${expenses}`);

// console.log('__________');
// console.log('Задание 3');

do {
    amount = prompt('Во сколько обойдутся обязательные статьи расходов?', '');
} while (isNaN(amount));
console.log(`Обязательные расходы: ${amount}`);

// console.log('__________');
// console.log('Задание 4');
// let deposit = confirm('Есть ли у вас вклад в банке?');
// if (deposit == true) {
//     console.log('У Вас есть вклад в банке');
// }
// else {
//     console.log('У Вас нет вклада в банке');
// }

// console.log('__________');
// console.log('Задание 5');
// let budgetMonth = money - amount
// console.log(`Бюджет на месяц: ${budgetMonth}`);

// console.log('__________');
// console.log('Задание 6');
// period = Math.ceil(purpose/budgetMonth);
// console.log(`Цель будет достигнута за ${period} месяцев`);

// console.log('__________');
// console.log('Задание 7');
// budgetDay = Math.floor(budgetMonth/30);
// console.log(`Бюджет на день: ${budgetDay}`);

// console.log('__________');
// console.log('Задание 8');
// if (budgetDay >= 60000) {
//     console.log("У Вас высокий уровень дохода");
// }
// else if (budgetDay >= 30000 && budgetDay < 60000) {
//     console.log("У Вас средний уровень дохода");
// }
// else if (budgetDay >= 0 && budgetDay < 30000) {
//     console.log("К сожалению у Вас уровень дохода ниже среднего");
// }
// else {
//     console.log("Что-то пошло не так");
// }


// console.log('__________');
// console.log('ДЗ-3');

// console.log('__________');
// console.log('Задание 1');
do {
    extraMoney = prompt('Перечислите возможный доход за ваши дополнительные работы:', '');
} while (isNaN(extraMoney));

console.log('__________');
console.log('Задание 2');
function getAccumulatedIncome() {
    return +money + +extraMoney - amount;
}
let accumulatedIncome = getAccumulatedIncome();

console.log('__________');
console.log('Задание 3');
function getTargetMonth() {
    return Math.ceil(purpose / accumulatedIncome);
}

console.log('__________');
console.log('Задание 4');
let budgetDay = Math.floor(accumulatedIncome / 30);
console.clear();

if (accumulatedIncome > 0) {
    console.log(`Ваши накопления за месяц (getAccumulatedIncome) составляют: ${accumulatedIncome}`);
    console.log(`Ваша цель - накопить ${purpose}, с учетом всех ваших расходов будет достигнута через`, getTargetMonth() + ' месяца');
    console.log(`Бюджет на день: ${budgetDay}`);
}
else {
    console.log(`Ваша цель - накопить ${purpose}, с учетом всех ваших расходов не будет достигнута!`);
}

