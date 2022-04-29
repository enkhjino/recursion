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
