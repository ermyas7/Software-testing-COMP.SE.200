const chai = require('chai');  
const assert = chai.assert;    
const expect = chai.expect;   
const should = chai.should();
const reduce = require('../src/reduce.js');

const testArray = [2, 3, 7, 9, 10];
const testObj = { 'a': 1, 'b': 2, 'c': 1, 'd': 3 };
describe("reduce", () => {
    const sumResult = testArray.reduce((acc, a) => acc + a, 0);
    it("It should add array elements on sum as callback", () => {
        assert(reduce(testArray, (sum, n) => sum + n, 0), sumResult);
    })

    it("It should multiply array elements on sum as callback", () => {
        const mulResult = testArray.reduce((mul, a) => mul * a, 1);
        assert(reduce(testArray, (mul, n) => mul * n, 1), mulResult);
    })

    it("It should convert object to value key array object", () => {
        const result = {};
        const ObjToValKeyArr = Object.values(testObj).forEach((value, ind) => {
            if(result[value]){
                result[value].push(Object.keys(testObj)[ind])
            }else{
                result[value] = [Object.keys(testObj)[ind]]
            }
        })

        const expectedResult = reduce(testObj, (res, value, key) => {
               (res[value] || (res[value] = [])).push(key)
               return res
             }, {});

        expect(expectedResult).deep.equal(result);
    })

})