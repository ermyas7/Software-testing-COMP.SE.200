const assert = require('assert');
const isDate = require('../src/isDate.js');

describe('isDate', () => {
    it('Should return true when parameter is Date Object', () => {
        const data = new Date();
        assert.equal(isDate(data), true);
    })

    it('Should return false when parameter is Date string', () => {
        const data = 'Fri Dec 3 2021';
        assert.equal(isDate(data), false);
    })

    it('Should return false invalid input', () => {
        const data = 'addes33242';
        assert.equal(isDate(data), false);
    })
})
