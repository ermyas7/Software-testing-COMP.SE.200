const assert = require('assert');
const toString = require('../src/toString.js');

describe('toNumber', () => {
    it('Should convert  number to String', () => {
        assert.equal(toString(3.5), '3.5');
    })

    it('Should return same value on string', () => {
        assert.equal(toString('4.0'), '4.0');
    })

    it('Should convert array to string', () => {
        assert.equal(toString([1,2,3]), '1,2,3');
    })

    it('Should convert null to empty string', () => {
        assert.equal(toString(null), 'null');
    })
});