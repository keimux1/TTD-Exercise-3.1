const assert = require("chai").assert;
const fibonacci = require("../js/Fibonacci");

describe("testing factorial function", function (){

    it("is the 1st number 0)",function(){
        assert.equal(fibonacci(1), 0);
    });

    it("is the 2nd number 1)",function(){
        assert.equal(fibonacci(2), 1);
    });

    it("is the 3nd number 1)",function(){
        assert.equal(fibonacci(3), 1);
    });

    it("is the 4th number 2)",function(){
        assert.equal(fibonacci(4), 2);
    });

});
