function add(x,y){
    console.log('add : '+ (x+y));
}

function multi(x,y){
    console.log('multi : '+ (x*y));
}

function sub(x,y){
    console.log('sub : '+ (x-y));
}

function div(x,y){
    console.log('div : '+ (x/y));
}

add(1,2);
multi(1,2);
sub(1,2);
div(1,2);
console.log("\nAfter calculator app\n")
function calculator(operation, num1, num2){
    operation(num1, num2);
}

add(1,2);
multi(1,2);
sub(1,2);
div(1,2);