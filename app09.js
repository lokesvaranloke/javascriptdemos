// var person={};
// console.log(person);

// person={firstname:"John" , lastname:"Max"};
// console.log(person);


var sri={
    firstname: 'Sri',
    lastname: 'Ram',
    address: {
        street: '102 main street',
        city: 'NY',
        state: 'NY',
    },
};

console.log(sri);

function greet(per){
    console.log('Hi ' +per.firstname+' '+per.lastname);
}

greet(sri);
// greet(john);

greet({
    firstname: 'Smith',
    lastname: 'Will',
});

console.log(sri);
console.log(JSON.stringify(sri));

var jsonstring = '{"firstname":"Hello","lastname":"World","address":{"street":"111 main street","city":"NY","state":"NY"}}';
var hello = JSON.parse(jsonstring);
console.log(hello);

console.log(greet);