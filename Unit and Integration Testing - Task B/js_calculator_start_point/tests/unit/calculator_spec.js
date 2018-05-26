var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('calculator displays result of specific number click', function(){
    calculator.numberClick(1);
    assert.equal(1, calculator.runningTotal);
  });

  it('calculator displays result of specific operator click', function () {
    calculator.operatorClick('*');
    assert.equal('*', calculator.previousOperator);
  });

  it('calculator can add numbers, display result', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal);
  });

  it('calculator can subtract numbers, display result', function () {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });

  it('calculator can multiply numbers, display result', function () {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal);
  });

  it('calculator can divide numbers, display result', function () {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal);
  });

  it('displays concatonated number upon multiple clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    calculator.numberClick(8);
    assert.equal(558, calculator.runningTotal);
  });

  it('multiple operators', function () {
    calculator.numberClick(7);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal('16', calculator.runningTotal);
  });

  it('clr button clears display when clicked', function(){
    calculator.numberClick(4);
    calculator.operatorClick('*');
    calculator.clearClick();
    assert.equal('0', calculator.runningTotal);
  });

});
