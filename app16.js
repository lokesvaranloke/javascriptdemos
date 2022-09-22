// IIFES

// Immediately Invokable Function Expressions

var newvar = 20;

//function expression
var greet1 = function(){
    console.log('hi greet1');
}

greet1();

//IIFES
var greet2 = (function(){
    var newvar = 30;
    console.log('hi greet2');
    console.log(newvar);
})();  //if we put fun inside () and in last give () then it will immediately invoke the fun

console.log(newvar);