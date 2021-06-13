function add (a, b) {
    return a + b;
}

function substract (a, b) {
    return a-b;
}

function multiply (a, b) {
    return a*b;
}

function divide (a, b){
    return a/b;
}

function operate (op, a, b){
    if (op == '+') return add(a,b);
    if (op == '-') return substract(a,b);
    if (op == '*') return multiply(a,b);
    if (op == '/') return divide(a,b);
}

function screenUpdate (){
    screen.textContent = screenValue;
}

function numBtnClick(e){
    let num = parseInt( e.target.textContent );
    screenValue = screenValue * 10 + num;
    
    screenUpdate();
}

function opBtnClick(e){
    currentOperator = e.target.textContent;

    if ( (currentOperator=='*'||currentOperator=='/') && screenValue==0 ) {
        console.log('b');
        screenValue = operate( currentOperator, oldValue, 1);
    }
    else if ( (currentOperator=='*'||currentOperator=='/') && oldValue==0 ) {
        screenValue = screenValue;
    }
    else if ( (currentOperator=='*'||currentOperator=='/') && (oldValue==0&&screenValue==0)) {
        screenValue = 0;
    }
    else {
        screenValue = operate( currentOperator, oldValue, screenValue);
    }

    screenUpdate();

    oldValue = screenValue;
    screenValue = 0;
}

function clearBtnClick(e){
    oldValue = 0;
    screenValue = 0;
    screenUpdate();
}

function equalBtnClick(e){
    screenValue = operate( currentOperator, oldValue, screenValue);
    screenUpdate();

    oldValue = screenValue;
    screenValue = 0;
}


const screen = document.querySelector('[class=pantalla]');
let screenValue = 0;
let oldValue = 0;
let currentOperator = '';

document.querySelectorAll('.btn.numBtn').forEach(item => {
    item.addEventListener('click', numBtnClick)
});

document.querySelectorAll('.btn.opBtn').forEach(item => {
    item.addEventListener('click', opBtnClick)
});
  
document.querySelector('.clearBtn').addEventListener('click', clearBtnClick);

document.querySelector('.equalBtn').addEventListener('click', equalBtnClick);