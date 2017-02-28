require('chai').should();
const lolLibrary = require('../lol-library');

describe('Lol Library', function () {
    it('#functionA must return "a"', function () {
        lolLibrary.functionA().should.equals('a');
    });

    it('#functionB must return "b"', function () {
        lolLibrary.functionB().should.equals('b');
    });

    it('#functionC must return "c"', function () {
        lolLibrary.functionC().should.equals('c');
    });
});