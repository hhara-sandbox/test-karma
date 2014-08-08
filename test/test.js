var assert = require("power-assert");
var target = require("../js/target");

console.log(target.returnPlus, assert);

describe("target", function () {
    describe("returnPlus", function () {
        it("２つの引数を足した値を返すこと", function () {
            assert(target.returnPlus(1,2) === 3);
        });
    });
});