import sumOfDigits from "../sumOfDigits";

describe('sumOfDigits', function () {
    it('should return with 7', function () {
        expect(sumOfDigits(16)).toEqual(7);
    });
    it('should return with 6', function () {
        expect(sumOfDigits(132189)).toEqual(6);
    })
})