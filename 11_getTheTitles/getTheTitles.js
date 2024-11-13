const getTheTitles = function(books) {



let times = books.length;
let titles = [];


for(let i=0; i<times; i++){
titles[i]= books[i].title;

}

return titles;













};


// Do not edit below this line
module.exports = getTheTitles;
