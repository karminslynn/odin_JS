const add = function(a,b) {

  return a+b;
	
};

const subtract = function(a, b) {

  return a-b;
	
};

const sum = function(arr) {

let total=0;
arr.forEach(element => {
  total+=element;
});

return total;
};

const multiply = function(number) {


  



  let total=1;
  number.forEach(element => {
    total=total*element;
  });
  
  return total;












};

const power = function(a,b) {
	

return a**b;

};

const factorial = function(a) {
let total=1;

  while(a>0){
  total=total*a;
  a--;
  }
  return total;
};

// npm test calculator.spec.js
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
