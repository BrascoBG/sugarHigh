# Sugar High

Problem

You have just finished Trick-or-Treating, and you cannot wait to enjoy all of the candy that you have gotten. However, there's one problem - you can get sugar high from eating too much candy! You would like to enjoy as many pieces of candy as possible at once before you get sugar high.

You are given an array of integers, candies, where each element represents the grams of sugar that each candy has. You are also given a threshold which is how many grams of sugar that you can consume at once before you get sugar high. You task is to output an array of indices of the candies that you can enjoy at once before crossing your sugar high threshold.

Note:

Your main priority is to eat the maximum number of candies possible, but if there are multiple ways of doing this, choose the one with the fewest grams of sugar total.

If there's still a tie, choose the lower indices.


Example

For candies = [33, 20, 12, 19, 29] and threshold = 33, the output should be sugarHigh(candies, threshold) = [2, 3].

Although [1, 2] is also valid, The candies at indices 2 and 3 have a lesser sum (12 + 19 = 31) than the candies at indices 1 and 2 (20 + 12 = 32).