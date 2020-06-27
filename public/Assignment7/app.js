
function getNumber(num){
    var display = document.getElementById('display');
    display.value += num;
}

function clearBtn(){
    var display = document.getElementById('display');
    display.value = "";
}

function eraseBtn(){
    var display = document.getElementById('display');
    display.value = display.value.slice(0,display.value.length - 1);
}

function equal(){
    var display = document.getElementById('display');
    display.value = eval(display.value);
}