const repeatString = function(text, count) {
    if (count<0){
        return "ERROR"
    }
    let str="";
        while(count){
            str+=text
            count--;
        }
    return str;
};

module.exports = repeatString;
