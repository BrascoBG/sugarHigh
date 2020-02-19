function sugarHigh(candies, threshold){
    let arr2 = [...candies];
    candies = candies.sort((a, b) => a - b);
    let sum = 0;
    let emptyArr = [];

    if(candies.length >= 0 && candies.length <= 10 ** 5 && threshold > 0 && threshold <= 10 ** 9){
        if(candies.every(element => element >= 0 && element <= 100)){
            for(let i = 0; i < candies.length; i++){
                sum += candies[i];
                if(sum < threshold){
                    let index = arr2.indexOf(candies[i]);
                    emptyArr.push(index);
                }
            }
            console.log(emptyArr.sort((a, b) => a - b));
        }else{
            console.log('Every integer in the array must be between 0 and 100');
        }
    }else{
        console.log('The length of the array must be between 0 and 100 000 and threshold value must be between 0 and 1 000 000');
    }
}
  sugarHigh([33, 20, 12, 19, 29], 33);
  sugarHigh([62, 67, 100], 8);
  sugarHigh([16, 39, 67, 16, 38, 71], 17);
  sugarHigh([16, 3, 14, 17, 11], 99);