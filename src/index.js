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
