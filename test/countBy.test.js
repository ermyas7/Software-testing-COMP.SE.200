const chai = require('chai');  
const assert = chai.assert;    
const expect = chai.expect;   
const should = chai.should();
const countBy = require('../src/countBy.js');
const { usersWithActive,
    usersWithMultipleInactive,
    usersWithMultipleActive,
    usersWithNoActive,
    usersWithNoinActive,
    usersWithEmptyElement} = require('./testData.js');

describe('countBy', () => {
    it('Should return one true and one false', () => {
        const exp = { 'true': 1, 'false': 1 };
        expect(countBy(usersWithActive, value => value.active)).deep.equal(exp);
    })

    it('Should return two true and one false', () => {
        const exp = { 'true': 2, 'false': 1 };
        expect(countBy(usersWithMultipleActive, value => value.active)).deep.equal(exp);
    })

    it('Should return empty Object on empty array', () => {
        expect(countBy(usersWithEmptyElement, value => value.active)).deep.equal({});
    })

    it('Should return 0 true and 2 false', () => {
        expect(countBy(usersWithNoActive, value => value.active)).deep.equal({true: 0, false: 2});
    })

    it('Should return 2 true and 0 false', () => {
        expect(countBy(usersWithNoinActive, value => value.active)).deep.equal({true: 2, false: 0});
    })
})