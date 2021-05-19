// 01. Write a function named "convertFahrToCelsius" that takes a single parameter and converts it to celsius.

function convertFahrToCelsius(answer) {
  if (Number(answer)) {
    var result = calculate(answer);
    return result
  }
  // For BOOLEANS... 
  else if (typeof answer === "boolean") {
    var value = JSON.stringify(answer);
    console.log(`"${value} is not a valid number but a/an ${typeof(answer)}."`)
    return `"${value} is not a valid number but a/an ${typeof (answer)}."`
  }
  // FOR STRING...
  else if (typeof answer === "string") {
    var number = parseInt(answer);
    if (!isNaN(number) || number === 0) {
      var valueNumber = calculate(number);
      return valueNumber;
    }
    else if (isNaN(number)) {
      var value = JSON.stringify(answer);
      console.log(`"${value} is not a valid number but a/an ${typeof(answer)}."`);
      return `"${value} is not a valid number but a/an ${typeof(answer)}"`
    }
  }
  // FOR ARRAY...
  else if (Array.isArray(answer)) {
    var value = JSON.stringify(answer);
    console.log(`"${value} is not a valid number but a/an ${typeof(answer)}."`);
    return `"${value} is not a valid number but a/an ${typeof(answer)}"`
  }
  // FOR OBJECT
  else if (typeof answer === "object" || typeof answer === Symbol) {
    var value = JSON.stringify(answer)
    console.log(`"${value} is not a valid number but a/an ${typeof(answer)}."`);
    return `"${value} is not a valid number but a/an ${typeof(answer)}."`
  }
  //OTHERS...
  else {
    var value = JSON.stringify(answer)
    console.log(`"${value} is not a valid number but a/an ${typeof(answer)}."`)
    `"return${value} is not a valid number but a/an ${typeof(answer)}"`
  }
}

// calculate function is here..
function calculate(answer){
  var calculate = ((answer - 32) / 1.8);
// rounded to 4 decimal 
var answerDecimal = calculate.toFixed(4);

//  convert your fahr to number
var convertAnswer = parseFloat(answerDecimal)

// console.log(typeof(convertAnswer))   celcius= calculate; fahr=F
console.log(convertAnswer);
return convertAnswer;
}

// TEST OF THE FUNCTIONS
convertFahrToCelsius("0");
convertFahrToCelsius(60);
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius(" "); 
convertFahrToCelsius([ ]);
convertFahrToCelsius([1, 2, 3]);
convertFahrToCelsius("Glory")
convertFahrToCelsius({name: "Glory", age: 26});
convertFahrToCelsius(false);


// 02-- Write a function named "checkYuGiOh" that takes a number, n, as an argument creates an array of numbers
//  from 1 to n and replaces multiples of 2, 3, and 5 with "yu", "gi" and "oh", then returns the resulting array.

function checkYuGiOh(n) {
  if (!Number(n)) {
    let json = JSON.stringify(n);
    return `invalid parameter: ${json}`
  } else {
    const arr = [];
    for (var i=1; i<=n; i++) {
      if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        arr.push("yu-gi-oh");
      } 
      else if (i % 2 === 0 && i % 3 === 0) {
        arr.push("yu-gi");
      } 
      else if (i % 2 === 0 && i % 5 === 0) {
        arr.push("yu-oh");
      } 
      else if (i % 3 === 0 && i % 5 === 0) {
        arr.push("gi-oh");
      } 
      else if (i % 2 === 0) {
        arr.push("yu");
      } 
      else if (i % 3 === 0) {
        arr.push("gi");
      } 
      else if (i % 5 === 0) {
        arr.push("oh");
      } 
      else {
        arr.push(i)
      }
    }
     return arr
  }
}

console.log(checkYuGiOh(5));
console.log(checkYuGiOh(10));
console.log(checkYuGiOh("fizzbuzz is meh"));
console.log(checkYuGiOh([1, 2, 3]));
console.log(checkYuGiOh("Glory"));
console.log(checkYuGiOh({name: "Glory", age: 21}));
