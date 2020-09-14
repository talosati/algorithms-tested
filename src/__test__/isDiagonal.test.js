import isDiagonal from "../isDiagonal";

describe('isDiagonal', function () {
    it('should return true', function () {
        expect(isDiagonal([
            [1, 0, 0],
            [0, 2, 0],
            [0, 0, 3],
        ]));
    })
})