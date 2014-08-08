console.log(lib.returnPlus(1,2));

describe("lib", function () {
    describe("returnPlus", function () {
        it("２つの引数を足した値を返すこと", function () {
            assert.equal(lib.returnPlus(1,2), 3, "テストが通りませんでした");
        });
    });
});