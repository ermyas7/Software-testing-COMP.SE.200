const chai = require('chai');  
const assert = chai.assert;    
const expect = chai.expect;   
const should = chai.should();
const filter = require('../src/filter.js');
const { usersWithActive,
        usersWithMultipleInactive,
        usersWithMultipleActive,
        usersWithNoActive,
        usersWithNoinActive,
        usersWithEmptyElement} = require('./testData.js');

describe('Filter', () => {
    it('Should return active user', () => {

        // get  active user
        const activeUser = usersWithActive.filter(({active}) => active === true);
        expect(filter(usersWithActive, ({ active }) => active === true)).deep.equal(activeUser);
    })

    it('Should return active users', () => {

        // get active users
        const activeUsers = usersWithMultipleActive.filter(({active}) => active === true);
        expect(filter(usersWithMultipleActive, ({ active }) => active === true)).deep.equal(activeUsers);
    })

    it('Should return not inactive user', () => {

        // get  inactive user
        const inactiveUser = usersWithActive.filter(({active}) => active === false);
        expect(filter(usersWithActive, ({ active }) => active === false)).deep.equal(inactiveUser);
    })

    it('Should return  inactive users', () => {

        // get inactive users
        const inactiveUsers = usersWithMultipleInactive.filter(({active}) => active === false);
        expect(filter(usersWithMultipleInactive, ({ active }) => active === false)).deep.equal(inactiveUsers);
    })

    it('Should return  empty array on empty user list', () => {
        expect(filter(usersWithEmptyElement, ({ active }) => !active)).deep.equal([[]]);
    })

    it('Should return  empty array on  no active user', () => {
        expect(filter(usersWithNoActive, ({ active }) => active === true)).deep.equal([[]]);
    })

    it('Should return  empty array on  no inactive user', () => {
        expect(filter(usersWithNoinActive, ({ active }) => active === false)).deep.equal([[]]);
    })
})