//settimeout and throttling

function sayHi(){
    var greeting = 'hi..';
    console.log(greeting);
}

// says Hi immediately
sayHi();

function sayHiLater(){
    var greeting = 'hi later..';
    setTimeout(function(){
        console.log(greeting);
    },5000 );
}

// says Hi after 5 secs
sayHiLater();

//throttling

function sayHiEvery5Sec(){
    var greeting = 'hi 5..';
    setInterval(function(){
        console.log(greeting);
    },5000 );
}

// says Hi every 5 sec
sayHiEvery5Sec();