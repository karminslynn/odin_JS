const fibonacci = function(num){


if(num<0) return "OOPS";
if(num==0) return 0;


let i = 0;
let j = 1, count = 1, total = 1;


for(; count<num; count++){

total=i+j;
i=j;
j=total;
}

return j;

};

// Do not edit below this line
module.exports = fibonacci;
