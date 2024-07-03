// เริ่มเขียนโค้ดตรงนี้
function multiplicationTable(n) {
  let finalResult = "";
  for (let i = 1; i <= n; i++) {
    let result = "";
    for (let j = 1; j <= n; j++) {
      result += i * j + "\t";
    }
    finalResult += result + "\n";
  }
  return finalResult;
}

let input1 = multiplicationTable(10);
console.log(input1);
