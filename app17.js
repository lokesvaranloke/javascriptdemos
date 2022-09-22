// closures - important concept

function greet(msg){
    var num=34;
    return function (name){
        console.log(num+ '.'+ msg + '-' + name);
    };
}

var x = greet('welcome');

console.log(x);

x('john');
x('smith');