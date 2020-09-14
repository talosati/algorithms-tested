export default function sumOfDigits(number) {
    let result = number
        .toString()
        .split('')
        .map(Number)
        .reduce((sum, digit) => {
            return sum + digit;
        }, 0);
    return (result < 10) ? result : sumOfDigits(result);
}