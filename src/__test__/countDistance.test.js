import countDistance from "../countDistance";

describe('countDistance', function () {
    it('should return an array with 2 elements',function () {
        expect(countDistance('alma', ['alms', 'sas', 'kslw', 'alom']))
            .toEqual([ 'alms', 'alom' ]
        );
    })
});
