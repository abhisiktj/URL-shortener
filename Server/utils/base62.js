const symbols="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const base=symbols.length;


const encode=(n)=> {
  let encoded = '';
  while (n) {
    const rem = n % base;
    num = Math.floor(n / base);
    encoded = symbols[rem].toString() + encoded;
  }
  return encoded;
}

const decode=(str)=>{
    let decoded = 0;
  while (str) {
    const idx = symbols.indexOf(str[0]);
    const power = str.length - 1;
    decoded += idx * (base ** power);
    str = str.substring(1);
  }
  return decoded;
}


module.exports={encode,decode};