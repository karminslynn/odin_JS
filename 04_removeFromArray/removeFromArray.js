const removeFromArray = function(arr, ...given) {


arr = arr.filter(num => !given.includes(num))

return arr;
};
// Do not edit below this line
module.exports = removeFromArray;
