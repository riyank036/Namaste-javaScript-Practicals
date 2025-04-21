// CASE 1
function a() {
    console.log(b); // 10
    // Instead of printing undefined it prints 10, So somehow this a function could access the variable b outside the function scope.
}
var b = 10;
a();


// CASE 2
function a() {
    c();
    function c() {
        console.log(b); // 10
    }
}
var b = 10;
a();


// CASE 3
function a() {
    c();
    function c() {
        var b = 100;
        console.log(b); // 100
    }
}
var b = 10;
a();


// CASE 4
function a() {
    var b = 10;
    c();
    function c() {
        console.log(b); // 10
    }
}
a();
console.log(b); // Error, Not Defined   


/* In case 1: function a is able to access variable b from Global scope.

In case 2: 10 is printed. It means that within nested function too, the global scope variable can
be accessed.

In case 3: 100 is printed meaning local variable of the same name took precedence over a
global variable.

In case 4: A function can access a global variable, but the global execution context can't
access any local variable.
 */