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

//console.log(power(3, 10));

//write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  // var product=1;
  // for(var i=0; i<arr.length; i++){
  //   product*=arr[i];
  // }
  // return product;
  if (arr.length === 0) return 1;
  //console.log(arr.length)
  return arr[0] * productOfArray(arr.slice(1));
}

//console.log(productOfArray([1, 2, 3, 10])); // 60

//write a function called recursiveRange which accepts a number and adds up all the numers from 0 to the number passed to the function.

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}
console.log(recursiveRange(10)); // 55
