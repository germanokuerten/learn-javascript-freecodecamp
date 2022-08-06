function start() {
    for (var i = 0; i < 5; i++) {
        if (true) {
            var color = 'red';
        }
    }
    

    console.log(color);        
}
    
start()

// global fuction, and added to the window object.
function sayhi() {
    console.log('hi');
}
    
    // var => function scoped, but if declared out of a function it is global scoped and attaches to browser's window object.
    // and you should avoid adding stuff to the window object, because it can create all kinds of issues in your program, especially when using 3rd party libraries.

    // ES6 (ES2015): let, const => blcock scoped functions