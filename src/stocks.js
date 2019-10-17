/**
 * 
 * @param {Array<number>} prices Array of stock non zero and non negative prices
 * @returns {number} Returns maximum profit. Returns 0 if input list is empty.
 * @throws {Error} When input is not a valid array or contains inappropriate prices.
 */

const getMaxProfit = (prices) => {
    // Initlising error messages
    const invalidInputErrorMessage = 'invalid price array';
    const invalidPriceErrorMessage = 'invalid price';

    // Verifying if the input is defined and is an Array
    if(prices === undefined || !(prices instanceof Array) ) {
        throw new Error(invalidInputErrorMessage);
    }

    const legthOfPriceArray = prices.length;
    
    // If input is an empty array, return 0
    if(legthOfPriceArray == 0) {
        return 0;
    }

    // Initialise variables
    let profit = 0;
    let buyPrice = prices[0];
    let sellPrice = 0;

    // If the first price is invalid, throw error
    if(buyPrice <= 0) {
        throw new Error(invalidPriceErrorMessage);
    }

    for(let i=1; i < legthOfPriceArray ; i++) {
        
        // If the price is invalid, throw error
        if( prices[i] <= 0 ) {
            throw new Error(invalidPriceErrorMessage);
        }

        // If the new price is more than previous buy price, check the profit difference.
        // If the profit is more, assign it as new profit.
        // If the new price is lower than the previous buy price, swapt it as new buy price.
        if(prices[i] > buyPrice) {
            if( prices[i] - buyPrice > profit) {
                profit = prices[i] - buyPrice;
                sellPrice = prices[i];
            }
        } else {
            buyPrice = prices[i];
        }
    }

    // Print BUY and SELL Price.
    console.debug(`BOUGHT at  ${buyPrice} `)
    console.debug(`SOLD at ${sellPrice}`)
    
    //Return the profit
    return profit;
};

//export the function
module.exports.getMaxProfit = getMaxProfit;
