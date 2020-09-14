import validatePIN from "../validatePIN";

describe('validatePIN', function () {
    it('should return true', function () {
        expect(validatePIN("1234")).toEqual(true);
    });
    it('should return false', function () {
        expect(validatePIN("12345")).toEqual(false);
    });
    it('should return false', function () {
        expect(validatePIN("a234")).toEqual(false);
    })
})