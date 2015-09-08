describe('equilateralTriangle', function() {
    it("is true for a triangle equal on all three sides", function() {
        expect(equilateralTriangle(2, 2, 2)).to.equal(true);
    });

    it("is false for a triangle not equal on all three sides", function() {
        expect(equilateralTriangle(2, 2, 1)).to.equal(false);
    });
});

describe('isoscelesTriangle', function() {
    it("is true for a triangle equal on only two sides", function() {
        expect(isoscelesTriangle(2, 2, 1)).to.equal(true);
    });

    it("is false for a triangle with more than two equal sides", function() {
        expect(isoscelesTriangle(2, 2, 2)).to.equal(false);
    });

    it("is false for triangle with no equal sides", function() {
        expect(isoscelesTriangle(1, 2, 3)).to.equal(false);
    });
});

describe('scaleneTriangle', function() {
    it("is true for a triangle with no equal sides", function() {
        expect(scaleneTriangle(1, 2, 3)).to.equal(true);
    });

    it("is false for a triangle with any equal sides", function() {
        expect(scaleneTriangle(2, 2, 3)).to.equal(false);
    });
});
