const assert = require("chai").assert;
const fibonacci = require("../js/Fibonacci");

describe("testing factorial function", function (){

    it("is the 1st number 0)",function(){
        assert.equal(fibonacci(0), 0);
    });

    it("is the 2nd number 1)",function(){
        assert.equal(fibonacci(1), 1);
    });

});
