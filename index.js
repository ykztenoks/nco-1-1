// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
// CODEWARS WE DID ^^^

function digitalRoot(n) {
  let sum = 0;

  // turns the number received as parameter into a string, then splits into array, exemplo: vvv
  // if we have 942, it's now ['9', '4', '2']
  let numArr = n.toString().split("");

  // ================================
  // function inside of the main function, it resets sum in case it has to run again, and then sum the digits
  function makeSum(arr) {
    //
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += Number(arr[i]);
    }
    //updating numArr in case we need to run the function again
    numArr = sum.toString().split("");

    if (numArr.length > 1) {
      makeSum(numArr);
    }
  }
  makeSum(numArr);
  //=================

  return sum;
}

// solution we worked together ^^^^^

// this solution also has a function inside of the digitalRoot function,
// but one variable stores the whole process which is the following
// turns the number into a string, then split turning it to an array of separate digits which are now strings
// map over this new array to turn the strings back to number
// reduce used to calculate the digits
// at the end it has a condition to check if we have a one digit number, otherwise it calls the function again
function digitalRoot(n) {
  let result = 0;
  let sum = (numero) => {
    result = numero
      .toString()
      .split("")
      .map(Number)
      .reduce((a, b) => a + b);
    if (result.toString().length >= 2) {
      sum(result);
    }
  };
  sum(n);
  return result;
}

// my solution ^^^

printHi(); // it works, regular function declaration is hoisted, so it could be at the end of the file and it would work
printHello(); // doesn't work, function expression is not hoisted

const printHello = () => {
  console.log("hello 🚬");
};

function printHi() {
  console.log("hi 💻");
}
