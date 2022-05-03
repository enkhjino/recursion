//first recursion function
function countDown(num) {
  if (num <= 0) {
    console.log("All done!");
    return; //if we dont return here then it will necer stop
  }
  console.log(num);
  num--;
  countDown(num);
}
//countDown(5)

function countDown1(num) {
  for (var i = num; i > 0; i--) {
    console.log(i);
  }
  console.log("All done!");
}

//countDown1(5)

//second function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
//console.log(sumRange(3))
// return 3+sumRange(2)  -> 3+3=6
//    return 2+sumRange(1) ->3
//                return 1

//third FACTORIAL
//LOOP way

function factorial(num) {
  var result = 1;
  for (var i = num; i > 0; i--) {
    result *= i;
  }
  return result;
}

//console.log(factorial(4))

//now RECURSIVELY
function factorialRec(num) {
  if (num === 1) return 1;
  return num * factorialRec(num - 1);
}

//console.log(factorialRec(4))

//use helper functions to make it easier
//given an array of nums return the odd numbers in an array

function oddValues(arr) {
  let result = [];
  function helper(helperInput) {
    //console.log(helperInput)
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

//console.log(oddValues([2,3,4,5,7,7]))

function power(base, exponent) {
  if (exponent === 0) return 1;
  console.log(exponent);
  return base * power(base, exponent - 1);
}

console.log(power(3, 10));
