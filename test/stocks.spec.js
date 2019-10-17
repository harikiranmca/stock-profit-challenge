const stocks = require('../src/stocks');
const assert = require('assert');

describe('stocks' , () => {
     describe('getMaxProfit' , () => {
          it('should return 0 profit when empty price list is passed', () => {
               assert.equal(0, stocks.getMaxProfit([]));
          });

          it('should throw error when invalid input is passed', () => {
               assert.throws(
                    () => stocks.getMaxProfit(),
                    /^Error: invalid price array$/
                  );
          });

          it('should throw error when negative prices are passed', () => {
               assert.throws(
                    () => stocks.getMaxProfit([-1, 3, 4, 2, 8]),
                    /^Error: invalid price$/
                  );
          });


          it('should throw error when 0 is passed in as a price', () => {
               assert.throws(
                    () => stocks.getMaxProfit([5, 3, 0, 2, 8]),
                    /^Error: invalid price$/
                  );
          });

          it('should return max profit when valid prices are passed', () => {
               assert.equal(6, stocks.getMaxProfit([10, 7, 5, 8, 11, 9]));
          });

          it('should return max profit when valid double prices are passed', () => {
               assert.equal(8.9, stocks.getMaxProfit([10, 2.1, 5, 8.2, 11, 9.1]));
          });

     });
});