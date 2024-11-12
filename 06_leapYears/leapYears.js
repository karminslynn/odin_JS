const leapYears = function(year) {
    if (year%4===0){
        if(year%100===0 && !(year%400===0)) return false;
        else return true;
    }
return false;

};

// npm test leapYears.spec.js
module.exports = leapYears;
