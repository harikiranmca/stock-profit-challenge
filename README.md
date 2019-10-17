# STOCK PROFIT CHALLENGE

This project contains a simple funciton to calculate the maximum profit that can be made with a given set of timely ordered ( time-series) stock prices.

**Ex:** prices = [ 3, 5, 7, 9, 4, 1, 4]
**Ans:**  Profit = 6

**Conditions:**

1. Stock should be bought prior selling.
2. Can't buy and sell at same timestamp ( index is treated as timestamp ).
3. It should be one trade of BUY and SELL.

### Approach to the problem

If it was not the time series data, the difference between smallest and largest would have been 
the answer. 

As the order is important, we need to first find the smallest price that can be used to buy and find the largest price 
in the subsequent array to sell.

As its the stock price array, it could grow huge based on the time intervals. So looping through it multiple times
will hamper the performance. Hence, achieving  the O(n) complexity is crucial for this problem.


To solve this,  I have used a subsequent number comparison technique and buffer to store intermediate buy price
 and profit values.

### How to setup on local machine?

#### prerequisites
1. NODE 10.16.3 or above
2. NPM  6.7.0 or above
3. git

#### How to run?

1. `git clone https://github.com/harikiranmca/stock-profit-challenge.git`
2. `cd stock-profit-challenge`
3. `npm install`
4. `npm run test`
