// by value and by ref

// now by value

var a = 10;
var b = 20;

console.log(a);
console.log(b);

var c = {greet: 'Hello'};

var d = c;

c.greet = 'Hii';
console.log(d);

d.greet = 'World';
console.log(c);
