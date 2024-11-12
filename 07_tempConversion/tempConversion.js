const convertToCelsius = function(F) {

let C = (5/9)*(F-32);

return Number(C.toFixed(1));

};

const convertToFahrenheit = function(C) {


let F = C*(9/5)+32;


return Number(F.toFixed(1));

};












// npm test tempConversion.spec.js
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
