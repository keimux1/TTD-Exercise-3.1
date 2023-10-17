const assert = require("chai").assert;
const fibonacci = require("../js/Fibonacci");

describe("testing factorial function", function (){

    it("check ing if the test function is failing",function(){
        assert.equal(fibonacci(0), 1);
    });

});
