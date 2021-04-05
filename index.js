// Code your solutions in this file
function writeCards(arrName = [], strImpress) {
    var name;
    var arrThanks = [];
    var strMessae = "";
    for (let i = 0; i < arrName.length; i++) {
        arrThanks[i] = `Thank you, ${arrName[i]}, for the wonderful ${strImpress} gift!`;
    }
    return arrThanks;
}

function countDown(intNumberProvide) {
    for (let i = intNumberProvide; i >=0; i--){
        console.log(i);
    }
}