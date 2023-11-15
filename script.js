//display number in text box
function displayNumber(num){
    result.value += num;
}

//clear the input value

function clearBox(){
    result.value = " ";
}

//evaluate expression

function evExp(){
    exp = result.value;
    output = eval(exp);
    result.value = output;

    //method 2
    result.value = eval(result.value);
}

//remove the last item from input box
function removeExp(){
    result.value = result.value.slice(0,-1);
}