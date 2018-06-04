// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function bigArray(arr){

    for( var i = 0; i < arr.length; i++){
        if ( arr[i] < 0){

            arr[i] = 'big';

        }
    }

}

bigArray(arr);
var arr= [-1, -3, 7, 8];


// Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function lowHigh(arr){
    var low= arr[0];
    var high= arr[0];

    for (var i = 0; i < arr. length; i++){

        if ( arr[i]< low){
            low = arr[i];
        }
        low.print(arr)

        if ( arr[i]>high){
            high = arr[i];
        }
        return high;
    }
}

var arr = [1,2,4,5,7];
lowHigh(arr);

// Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function arrNew(arr){
    for ( var i = 0; i < arr.length; i++){

        console.log(arr[2], arr[3]);

    }
    if ( arr[i]% 2 !==0){

      return arr[1];

    }

}

var arr = [ 2, 1, 4, 6];

var output = arrNew(arr);

console.log(output)

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    for ( var i = 0; i< arr.length; i++){

        arr[i] = arr[i]*arr[i];
    }

    return arr;
}

var arr= [1,2,3,4];
var output = doubleVision(arr);

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositive(arr){

    var count = 0;


    for ( var i = 0; i< arr.length; i++){
        if( arr[i]>0){
          count = count + 1;
        }
    }

  arr[arr.length - 1] = count;

  return arr;


}

var arr = [-1,-1,2,3, 8, 10, -7, 8];

var output = countPositive(arr);

console.log(output);


// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"
function evenOdd(arr){
    var evenCount = 0;
    var oddCount = 0;

    for (var i = 0; i< arr.length; i++){
        // EVEN
        if ( arr[i] % 2 === 0){
            evenCount = evenCount + 1;
            oddCount = 0;
        }

        // ODD
        if ( arr [i] % 2 !== 0){
            oddCount = oddCount + 1;
            evenCount = 0;
        }

        if ( evenCount === 3){
            console.log('Even more so!');
        }

        if ( oddCount === 3){
            console.log("That's odd!");
        }
    }
}

var arr = [ 13, 13, 7, 8, 2, 22, 18, 90, 1, 3, 7];
evenOdd(arr);

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function incrementSec(arr){



    for ( var i = 0; i < arr.length; i ++){

        if ( i % 2 !== 0){
            arr[i] = arr[i] + 1;
            console.log(arr[i]);
        }
    }

  return arr;

}

var arr = [ 1, 2, 3, 4, 5];
var output = incrementSec(arr);
console.log(output);

// Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.

function prevLength(arr){
    for (var i = 0; i < arr.length -1 ; i ++){


    }

    return arr;
}

var output = prevLength(arr);
console.log(output);


//Add Seven to Most - Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.
function addSeven(arr){
    var output = [];
    for(var i = 0; i < arr.length; i++) {
        if(i !== 0) {
            output.push(arr[i] + 7);
        }
    }
    return output;
}
var input = [1,2,3,4];
console.log(addSeven(input)); // [9, 10, 11]

// Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(arr){
    for(var i = 0; i < arr.length; i++) {
        var swapWithIndex = arr.length - 1 -i;
        if(arr.length > 3) {
            if((swapWithIndex === 0 || swapWithIndex === 1)) {
                break;
            }
        } else {
            if(i > 0) {
                break;
            }
        }
        var swap = arr[i];
        arr[i] = arr[swapWithIndex];
        arr[swapWithIndex] = swap;
    }
    return arr;
}
var input = [1,2,3,4];
console.log(reverse(input)); // [4, 3, 2, 1]


// Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
function negativeOne(arr){
    var output = [];
    for(var i = 0; i < arr.length; i++){
        output.push(parseInt('-' + arr[i]));
    }
    return output;
}
var input = [1,2,3,4];
console.log(negativeOne(input)); // [-1, -2, -3, -4]

// Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.
function food(arr){
    var hasFood = false;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === 'food') {
            console.log("yummy");
            hasFood = true;
        }
    }
    if(hasFood === false) {
        console.log("I'm hungry");
    }
}

console.log(food(['food', 'carrot', 'nothing'])); // yummy
console.log(food(['carrot', 'nothing'])); // I'm hungry



// Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swap(arr){
    var first = arr[0];
    var third = arr[2];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = first;

    arr[2] = arr[arr.length - 3];
    arr[arr.length - 3] = third;

    return arr;
}

console.log(swap([true,42,"Ada",2,"pizza"])); // ["pizza", 42, "Ada", 2, true]
console.log(swap([1,2,3,4,5,6])); // [6,2,4,3,5,1]

// Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].
function multiply(arr, num) {
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i] * num;
    }
    return arr;
}
console.log(multiply([1,2,3], 3)); // [3,6,9]