/* `this` keyword */

function test1() {
    return this;
}

let test2 = function () {
    return this;
}

console.log(test1()) // refers to global execution context
console.log(new test1()) // refers to lexical/functional scope of the newly created object

// Same goes for function expressions
console.log(test2()) // refers to global execution context
console.log(new test2()) // refers to lexical/functional scope of the newly created object


/* IIFEs does have access to outside context*/
console.log(
    (function () {
        return this;
    })()
);

// with `new` instance, local context is returned
(function () {
    function fg(){this.th = 'th'; return this}
    console.log(new fg())
})();

// without creating a `new` instance, all variables declared inside are also part of the global
(function () {
    function fg(){this.th = 'th'; return this}
    console.log(fg())
})();
