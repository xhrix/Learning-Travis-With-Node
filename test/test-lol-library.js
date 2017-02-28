require('chai').should();
const lolLibrary = require('../lol-library');

describe('Lol Library', function () {
    it('#functionA must return "a"', function () {
        lolLibrary.functionA().should.equals('a');
    });

    it('#functionA must return "b"', function () {
        lolLibrary.functionB().should.equals('b');
    });
});