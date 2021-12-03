const chai = require('chai');  
const assert = chai.assert;    
const expect = chai.expect;   
const should = chai.should();
const filter = require('../src/filter.js');

describe('Filter', () => {

    //test data
    const usersWithActive = [
           { 'user': 'barney', 'active': true },
           { 'user': 'fred',   'active': false }
         ]

    const usersWithMultipleInactive = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred',   'active': false },
    { 'user': 'Mike',   'active': false },
    ]     
    
    const usersWithMultipleActive = [
    { 'user': 'barney', 'active': true },
    { 'user': 'Jone', 'active': true },
    { 'user': 'fred',   'active': false }
    ]

    const usersWithNoActive = [
        { 'user': 'Jone', 'active': false },
        { 'user': 'fred',   'active': false }
    ]

    const usersWithNoinActive = [
        { 'user': 'Jone', 'active': true },
        { 'user': 'fred',   'active': true }
    ]

    const usersWithEmptyElement = [];

    it('Should return active user', () => {

        // get  active user
        const activeUser = usersWithActive.filter(({active}) => active === true);
        expect(filter(usersWithActive, ({ active }) => active === true)).deep.equal(activeUser);
    })

    it('Should return active users', () => {

        console.log(filter(usersWithMultipleActive, ({ active }) => active === true));
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