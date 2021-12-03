const assert = require('assert');
const toNumber = require('../src/toNumber.js');

describe('toNumber', () => {
    it('Should convert string number to number', () => {
        assert.equal(toNumber('3.5'), 3.5);
    })

    it('Should return same value on number', () => {
        assert.equal(toNumber(4.0), 4.0);
    })

    it('Should return NaN on invalid input', () => {
        assert.equal(toNumber('asad'), NaN);
    })

    it('Should convert negative number as string to number', () => {
        assert.equal(toNumber('-5.5'), -5.5);
    })
});