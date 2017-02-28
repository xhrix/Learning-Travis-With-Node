const should = require('chai').should();

describe('My Test Suite', function () {
    it('#yeahFunction', function () {
        'hi'.should.have.lengthOf(2);
    });

    it('#omgFunction', function () {
        const nonExistant = void 0;
        should.not.exist(nonExistant);
    });
});