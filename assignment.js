
//PROBLEM NO.1
function kilometerToMeter(kilometer) {
    var meter = kilometer*1000;
    return meter;    
}

//PROBLEM NO.2
function budgetCalculator(watch, phone, laptop){
    
    var watchPrice = watch*50; //watch price = 50
    var phonePrice = phone*100; // phone price = 100
    var laptopPrice = laptop*500 // laptop price = 500
    totalPrice = watchPrice+phonePrice+laptopPrice;
return totalPrice;
}

//PROBLEM NO.3
function hotelCost(stay){
    var cost = 0;
        if(stay<=10){
            cost = stay*100;
        }
        else if(stay<=20){
            var firstPart = 10*100;
            var remaining = stay-10;
            var secondPart = remaining*80;
            cost = firstPart+secondPart;    
        }
        else{
            var firstPart = 10*100;
            var secondPart = 10*80;
            var remaining = stay-20;
            var thirdPart = remaining*50;
            cost = firstPart+secondPart+thirdPart;
        }
return cost;

//PROBLEM NO.4
function megaFriend(findingLongestArray) {
    var max = findingLongestArray[0].length;
    findingLongestArray.map(v => max = Math.max(max, v.length));
    result = findingLongestArray.filter(v => v.length == max);
return result;
}