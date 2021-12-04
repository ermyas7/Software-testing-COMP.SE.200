const assert = require('assert');
const endsWith = require('../src/endsWith.js');

describe('endsWith', () => {
    it('Should return true on last String as param', () => {
        const testStr = 'this is test';
        const lastLetter = testStr[testStr.length - 1];
        assert.equal(endsWith(testStr, lastLetter), true);
    })

    it('Should return true on last SubStr as param', () => {
        const testStr = 'this is test';
        const lastSubStr = testStr.slice(-3);
        assert.equal(endsWith(testStr, lastSubStr), true);
    })

    it('Should return false on empty string as first parameter and non-empty as second', () => {
        assert.equal(endsWith('', 'c'), false);
    })

    it('Should return true on both parameters as empty', () => {
        assert.equal(endsWith('', ''), true);
    })

    it('Should return true on both parameters as same string', () => {
        const testStr = 'this is test';
        assert.equal(endsWith(testStr, testStr), true);
    })

    it('Should return false on non matching string', () => {
        const testStr = 'this is test';
        assert.equal(endsWith(testStr, 'is'), false);
    })
})