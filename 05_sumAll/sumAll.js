const sumAll = function(p, q) {
    // Check for invalid inputs
    if (!(Number.isInteger(p) && Number.isInteger(q)) || (p < 0 || q < 0)) {
      return "ERROR";
    }
  
    // Get the range of numbers (min and max)
    const [min, max] = p > q ? [q, p] : [p, q];
  
    // Calculate the sum of all integers between min and max (inclusive)
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  };


// npm test sumAll.spec.js
module.exports = sumAll;
