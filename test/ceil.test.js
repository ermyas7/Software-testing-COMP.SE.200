import assert from 'assert';
import ceil from '../src/ceil.js';

describe('Ceil', function() {

  describe('Should return the same integer when precision is zero', () => {
    const x = 5;
    it(`should return ${x} when input is ${x}`, () => {
      assert.equal(ceil(x), x);
    });

    it(`should return -${x} when input is -${x}`, () => {
      assert.equal(ceil(-x), -x);
    });

    it(`should return 0 when input is 0`, () => {
      assert.equal(ceil(0), 0);
    });
  });

  describe('Should round up to the nearst integer', () => {
    const x = 7.5;
    const y = Math.ceil(x);
    const z = Math.ceil(-x);

    it(`should return ${y} when input is ${x}`, () => {
      assert.equal(ceil(x), y);
    });

    it(`should return ${z} when input is -${x}`, () => {
      assert.equal(ceil(-x), z);
    });
  });


describe('Should round up the last digit to second last', () => {
  const x = 7.52;
  const y = (Math.ceil(x * 10) / 10).toFixed(1);
  const z = (Math.ceil((-x * 10)) / 10).toFixed(1);
 
  it(`should return ${y} when input is ${x}`, () => {
    assert.equal(ceil(x,1), y);
  });

  it(`should return ${z} when input is -${x}`, () => {
    assert.equal(ceil(-x,1), z);
  });
});


describe('Should round up the 100th digit', () => {
  const x = 6040;
  const y = Math.ceil(x / 100) * 100;
  const z = Math.ceil(-x / 100) * 100;

  it(`should return ${y} when input is ${x}`, () => {
    assert.equal(ceil(x,-2), y);
  });

  it(`should return ${z} when input is -${x}`, () => {
    assert.equal(ceil(-x,-2), z);
  });
});

});