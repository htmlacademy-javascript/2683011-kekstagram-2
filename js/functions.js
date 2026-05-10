//*........Задание № 1 -- "Функция для проверки длины строки"

// const checkStringLength = (string = '', charAmount = 1) => string.length <= charAmount;

// console.log(checkStringLength('12345', 5));

//*........Задание № 2 -- "Функция для проверки, является ли строка палиндромом"

// const checkPalindrom = (string) => {

//   let newString = string.replaceAll(' ', '');
//   newString = newString.toUpperCase();
//   let additionalString = '';

//   for (let i = newString.length - 1; i >= 0; i--) {
//     additionalString += newString.at(i);
//   }

//   return additionalString === newString;
// };

// console.log(checkPalindrom('1a Bb A 1'));

//*.....Рефакторинг задания № 2 на основе Видео Открытого урока с разбором ДЗ

// const checkPalindrome = (string = '') => {

//   string = string.replaceAll(' ', '').toUpperCase();
//   let reverseString = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     reverseString += string.at(i);
//   }
//   return reverseString === string;
// };

// console.log(checkPalindrome('11'));

//*........Задание № 3 -- "Функция возврата целого положительного числа из строки"

// const getInteger = (string) => {

//   const additionalString = string.toString();
//   let resultString = '';

//   for (let i = 0; i < additionalString.length; i++) {

//     const checkForNumber = parseInt(additionalString.at(i), 10);

//     if (Number(checkForNumber) === Number(checkForNumber)) {

//       resultString += additionalString.at(i);
//     }
//   }

//   const resultNumber = Number(resultString);

//   if (resultNumber === 0) {
//     return NaN;
//   }

//   return resultNumber;
// };

// console.log(getInteger('W'));

// //*....Рефакторинг задания № 3 на основе Видео Открытого урока с разбором ДЗ

const getInteger = (string = '') => {

  string = string.toString();
  let result = '';

  for (let i = 0; i <= string.length - 1; i++) {

    if (Number.isNaN(parseInt(string.at(i), 10)) === false) {
      result += string.at(i);
    }
  }
  return result === '' ? NaN : Number(result);
};

// console.log(getInteger('12'));
getInteger('12');
