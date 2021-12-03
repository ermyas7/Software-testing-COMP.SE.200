const assert = require('assert');
const isEmpty = require('../src/isEmpty.js');

describe('isEmpty', () => {

    it('Should return true on empty string', () => {
        assert.equal(isEmpty(''), true);
    })

    it('Should return true on number', () => {
        assert.equal(isEmpty(12), true);
    })

    it('Should return true on null', () => {
        assert.equal(isEmpty(null), true);
    })

    it('Should return true on []', () => {
        assert.equal(isEmpty([]), true);
    })

    it('Should return true on {}', () => {
        assert.equal(isEmpty({}), true);
    })

    it('Should return true on undefined', () => {
        assert.equal(isEmpty(), true);
    })

    it('Should return false on none empty object', () => {
        const obj = {test: true}
        assert.equal(isEmpty(obj), false);
    })

    it('Should return false on none empty array', () => {
        const arr = ['test']
        assert.equal(isEmpty(arr), false);
    })

})