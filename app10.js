greet();

//fun st
function greet(){
    console.log('hi');
}

//fun exp
var annonymousgreet = function(){
    console.log('hi again');
}

annonymousgreet();

//whatever it gets, it will log it
function log(value){
    console.log(value);
}

var b=3;

log(b);
log(5);
log('hello');
log({greeting: 'hi'});

log(function(){
    console.log('hi from func');
});

log(() => {
    console.log('some more');
  });

  function newlog(b){
    b();
  }

  newlog(function (){
    console.log('print something');
  });