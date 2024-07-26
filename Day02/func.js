const {odd, even } =  require('./var');

function checkOddEven(num){
    //1이면 true, 0이면 false
    if(num % 2){//홀수이면
        return odd;
    }
    return even;
}
function checkStringOddOrEven(str){
    //1이면 true, 0이면 false
    if(str.length % 2){//홀수이면
        return odd;
    }
    return even;
}
//외부에서 사용가능 하도록 올린다.
module.exports = checkOddEven;
module.exports = checkStringOddOrEven;