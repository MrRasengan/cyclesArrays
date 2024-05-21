// Создайте массив с элементами 1, 2, 3. Выведите на экран каждый из этих элементов.

// const arr = [1, 2, 3];
// arr.forEach((element) => {
// 	console.log(element);
// });

// Создайте массив с произвольными элементами. Выведите на экран количество элементов в этом массиве.

// const newArray = [1, 3, 5, 7];
// console.log(newArray.length);

//Функция для добавления рандомных значений в массив

// function randomArr(number) {
//   const array = [];
//   for (let i = 0; i < number; i++) {
//     array.push(Math.floor(Math.random() * (100 - 1) + 1));
//   }
//   return array;
// }
// console.log(randomArr(10));

// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.

// const newArr = ["a", "b", "c"];
// newArr[0] = 1;
// newArr[1] = 2;
// newArr[2] = 3;
// console.log(newArr);

// Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу.

// function arrPlusOne() {
//   const arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   arr[i]++;
//   for (let j = 0; j < arr.length[1]; j++) {
//     arr[j]++;
//     for (let k = 0; k < arr.length[2]; k++) {
//       arr[k]++;
//     }
//   }
// }
// console.log(arr);
// }
// arrPlusOne();

// Узнайте длину следующего массива:
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);

// Пусть дан такой массив:
// Добавьте ему в конец элементы 4 и 5.

// function arrPush() {
//   const arr = [1, 2, 3];
//   arr.push(4, 5);
//   console.log(arr);
// }

// arrPush();

// Создайте произвольный массив из 5 элементов, Удалите из него два последних элемента. Проверьте, какое станет значение свойства length после этого.

// const arr = [1, 2, 3, 4, 5];
// arr.pop();
// arr.pop();
// console.log(...arr);

// С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

// for (let i = 1; i <= 99; i = i + 2) {
//   console.log(i);
// }

// С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i > 0; i--) {
//   console.log(i);;
// }

// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

// function multiplyByThreeUntilOver1000(num) {
//   let result = num;
//   let iterations = 0;

//   while (result <= 1000) {
//       result *= 3;
//       iterations++;
//   }

//   console.log("Начальное число: " + num);
//   console.log("Полученное число: " + result);
//   console.log("Количество итераций: " + iterations);
// }

// multiplyByThreeUntilOver1000(1);

// Дан массив const arr = [2, 5, 9, 15, 1, 4];
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// function checkNumber() {
// 	const arr = [2, 5, 9, 15, 1, 4];
// 	for (let i = 0; i < 10; i++) {
// 		if (arr[i] > 3 && arr[i] < 10) {
// 			console.log(arr[i]);
// 		}
// 	}
// }
// checkNumber();

// Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i <= 100; i += 2) {
// 	sum += i;
// }
// console.log(sum);

// Дан массив const = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.

// const arr = [2, 5, 9, 3, 1, 4];
// let sum = 0;
// arr.forEach(element => sum += element);
// console.log(sum);

// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let stroka = ' - ';
// for (let i = 1; i <= 9; i++) {
//   stroka += i + ' - ';
// }
// console.log(stroka);

// Дан массив с числами [2, 5, 9, 0, 3, 1, 4]; Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

const array = [2, 5, 9, 0, 3, 1, 4];
let i = 0;
do {
    console.log(array[i]);
    i++;
} while (array[i] !== 0);
