export default function isDiagonal(twoDimensionalArray) {
    for (let i = 0; i < twoDimensionalArray.length; i++) {
        for (let j = 0; j < twoDimensionalArray[i].length; j++) {
            if (i !== j && twoDimensionalArray[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}