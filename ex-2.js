// เริ่มเขียนโค้ดตรงนี้
function printStar(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= i; j++) {
      result += "*" + "\t";
    }
    finalResult += result + "\n";
  }
  return finalResult;
}

let input1 = printStar(5);
console.log(input1);
