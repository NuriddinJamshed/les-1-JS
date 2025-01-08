let sumTwoNum = (num1, num2) =>{
    return num1 + num2;
}
console.log(sumTwoNum(1, 5));

let checkNumber = (num) =>{
    return num<0 ? "Negative" : num>0 ? "Positive" : "Zero";
}
console.log(checkNumber(5));

let generateMultiplicationTable = (num) => {
    let res = "";
    for(let i=1; i<=10; i++){
        res += num + " * " + i + " = " + num*i + "\n";
    }
    return res;
}

console.log(generateMultiplicationTable(3));