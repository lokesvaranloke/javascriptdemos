// arg and spread

//   ...others is a spread ..if we give more than 2 arg and remaining are consider as spread(others)
function greet(firstname, lastname, ...others){
    console.log('Welcome '+firstname + ' '+ lastname);
    console.log(others)
}

greet('john','david');
greet('john');
greet('john','david','deo','hello','world');