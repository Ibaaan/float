function intToFloat(num) {
    let sign = num < 0 ? 1 : 0;
    
    let normalizedNumber = Math.abs(num);
    let exp = Math.floor(Math.log2(normalizedNumber));
    let mantissa = normalizedNumber / Math.pow(2, exp) - 1;
    
    let biasedExponent = exp + 127; 
    
    let signBin = sign.toString(2);
    let expBin = biasedExponent.toString(2).padStart(8, '0');
    let mantissaBin = mantissa.toString(2).substring(2).padEnd(23, '0');
    
    let res = signBin + expBin + mantissaBin;
    
    return res;
}
  
let fs = require('fs');
let num = parseFloat(fs.readFileSync("output.txt").toString());
  
if (typeof num === 'number' && !isNaN(num)) {
    let res = intToFloat(num);
    fs.writeFileSync('result.txt', res);
    console.log(res);
} 
else {
    console.log("Введеные данные не являются числом!");
}