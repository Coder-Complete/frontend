// [55, 777, 88]

// let names = ["jared", "sam", "alex"];

// for (let index = 0; index < names.length; index++) {
//   console.log(names[index].toUpperCase());
// }

// index (position) -> starts at 0 and goes to however long the array is minus 1

// let domNodeObject = document.querySelector(".top-section__links");
// let children = domNodeObject.children;
// console.log(children);
/* children: [
  {
    style: {...},
    children: [...],
    ...
  }, {
    style: {...},
    children: [...],
    ...
  }, {
    style: {...},
    children: [...],
    ...
  }
] */

// loops (for)

// for (let index = 0; index < children.length; index++) {
//   let item = children[index];
//   item.style.backgroundColor = "red";
// }

/*





*/

// domNodeObject.style.border = "1px solid black";
// domNodeObject.style.borderRadius = "20px";

// document.body.style.backgroundColor = "red";

// let document = {
//   body: {
//     style: {
//       backgroundColor: "white",
//       // ...
//     },
//     // ...
//   },
//   // ...
// };

/* 























*/

// let jared = {
//   age: 29,
//   lastName: "weiss",
//   birthday: {
//     month: 1,
//     day: 19,
//   },
//   speak: function (something) {
//     console.log(something);
//   },
// };

// jared.speak("hello");

/* 























*/

// let jared = {
//   age: 29,
//   lastName: "weiss",
//   birthday: {
//     month: 1,
//     day: 19,
//   },
// };

// let susan = {
//   age: 55,
//   lastName: "blah",
//   birthday: {
//     month: 4,
//     day: 22,
//   },
// };

// let isBirthdayMonthValid = function (monthNumber) {
//   if (monthNumber >= 1 && monthNumber <= 12) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let getMonthString = function (monthNumber) {
//   let str = "";
//   let monthNumberIsValid = isBirthdayMonthValid(monthNumber);
//   if (monthNumberIsValid) {
//     if (monthNumber === 1) {
//       str = "January";
//     } else if (monthNumber === 2) {
//       str = "February";
//     } else if (monthNumber === 3) {
//       str = "March";
//     } else if (monthNumber === 4) {
//       str = "April";
//     } else if (monthNumber === 5) {
//       str = "May";
//     } else if (monthNumber === 6) {
//       str = "June";
//     } else if (monthNumber === 7) {
//       str = "July";
//     } else if (monthNumber === 8) {
//       str = "August";
//     } else if (monthNumber === 9) {
//       str = "September";
//     } else if (monthNumber === 10) {
//       str = "October";
//     } else if (monthNumber === 11) {
//       str = "November";
//     } else {
//       str = "December";
//     }
//   } else {
//     return "Invalid";
//   }
//   return str;
// };

// let consoleLogBirthdayText = function (person) {
//   let str = "";
//   let monthString = getMonthString(person.birthday.month);

//   if (monthString === "Invalid") {
//     str = "Invalid month";
//   } else {
//     str = monthString;
//   }

//   console.log(str);
// };

// consoleLogBirthdayText(jared);

// consoleLogBirthdayText(susan);

// // "January nineteenth"
// // "September twenty-first"
