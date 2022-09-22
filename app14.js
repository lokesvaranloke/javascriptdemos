var arr = new Array();

arr = [];
arr = [1,2,3];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr = [
    1,
    2,
    "hello",
    false,
    {
        name:'Arun',
        address: 'NY',
    },
    function(name){
        var greeting = 'hello';
        console.log(greeting+ name);
    }
]

console.log(arr);
arr[5(arr[4].name)]