function createMatrixRows(n) {
    return Array(n).fill(null).map(() => []);
}

export default function rotateMatrixWithLoops(matrix) {
    let newMatrix = createMatrixRows(matrix[0].length);
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j <  matrix.length; j++) {
            newMatrix[i][j] = matrix[(matrix.length-1)-j][i];
        }
    }
    return newMatrix;
}