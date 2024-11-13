const palindromes = function (str) {


alphaNum = "abcdefghijklmnopqrstuvwxyz0123456789";


let cleaned = str
                .toLowerCase()
                .split("")
                .filter((letter) => alphaNum.includes(letter))
                .join("");

let reversed = cleaned.split("").reverse().join("");


return reversed === cleaned;

};

// Do not edit below this line
module.exports = palindromes;
