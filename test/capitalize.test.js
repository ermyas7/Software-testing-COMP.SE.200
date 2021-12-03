const assert = require('assert');
const capitalize = require('../src/capitalize.js');

// custome capitalise uitility
const toUpper = (x) => x.split('').map((w, i) => i === 0 ? w.toUpperCase() : w.toLowerCase()).join('');

describe('Capitilize', () => {

    //test inputs
    const x = 'freedom';
    const y = 'FREEDOM'

    it(`Should capitilize small letter word ${x} to ${toUpper(x)}`, () => {
        assert.equal(capitalize(x), toUpper(x));
    })

    it(`Should not modify when number is given as input`, () => {
        assert.equal(capitalize(12322), 12322);
    })

    it(`Should capitalize only on capital letter work ${y} to ${toUpper(y)} `, () => {
        assert.equal(capitalize(y), toUpper(y));
    })

    it(`Should not modify when word is already capitalized`, () => {
        assert.equal(capitalize('Freedom'), 'Freedom');
    })

    it(`Should return empty string on empty as parameter`, () => {
        assert.equal(capitalize(''), '');
    })

    it(`Should return undefined on undefined parameter`, () => {
        assert.equal(capitalize(), 'Undefined');
    })
})