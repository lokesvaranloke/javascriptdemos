var person={
    firstname: "Default",
    lastname: "Default",
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    },
};

var john={
    firstname: "John",
    lastname: "Doe",
};

//you should never do this..//this is for eg only
john.__proto__ = person;
console.log(john.getFullName());

//now let us look at right way to create objects in js

var johnc = Object.create(person);
johnc.firstname = "Max";
johnc.lastname = "Well";
console.log(johnc.getFullName());
console.log(johnc);;