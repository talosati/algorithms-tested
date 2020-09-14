import rotateMatrixWithLoops from "../rotateMatrix";

describe('rotateMatrix', function () {
    it('should return a rotated copy of the original matrix', function () {
        expect(rotateMatrixWithLoops([
            [1, 2, 3, 4],
            [1, 2, 3, 4],
            [1, 2, 3, 4],
        ]))
            .toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]]);
    });
    it('should return a rotated copy of the original square matrix', function () {
        expect(rotateMatrixWithLoops([
            [1, 2, 3],
            [1, 2, 3],
            [1, 2, 3],
        ])).toEqual([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
    })
})