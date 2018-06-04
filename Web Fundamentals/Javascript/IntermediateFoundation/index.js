// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).  Ex: sigma(3) = 6 (or 1+2+3); sigma(5) = 15 (or 1+2+3+4+5).
function sigma(num) {
    var output = 0;
    while(num) {
        output += num;
        num--;
    }
    return output;
}
console.log(sigma(3)); // 6
console.log(sigma(5)); // 15

// Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).  For example, factorial(3) = 6 (or 1*2*3); factorial(5) = 120 (or 1*2*3*4*5).
function factorial(num) {
    var output = 1;
    while(num) {
        output *= num;
        num--;
    }
    return output;
}
console.log(sigma(3)); // 6
console.log(sigma(5)); // 120


//Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you don't know what a recursion is yet, don't worry as we'll be introducing this concept in Part 2 of this assignment.
function fibonacci(num) {

}

// Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
    var output = null;
    if(arr.length >= 2) {
        output = arr[arr.length - 2];
    }
    return output;
}
console.log(secondToLast([42, true, 4, "Liam", 7])) // Liam
console.log(secondToLast([7])); // null
console.log(secondToLast([7, 5])); // 7


// Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nFromEnd(arr, n) {
    var output = null;
    if(arr.length >= n) {
        output = arr[arr.length - n];
    }
    return output;
}
console.log(nFromEnd([5,2,3,6,4,9,7], 3)) // 4
console.log(nFromEnd([7], 5)); // null


// Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.
function secondLargest(arr) {
    var output = null;
    if(arr.length >= 2) {
        var largest = arr[0];
        var secondLargest = arr[0];
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] > largest) {
                largest = arr[i];
            }
        }
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] > secondLargest && arr[i] < largest) {
                secondLargest = arr[i];
            }
        }
        output = secondLargest;
    }
    return output;
}
console.log(secondLargest([42,1,4,3.14,7])); // 7
console.log(secondLargest([42,1,4,3.14])); // 4
console.log(secondLargest([42])); // null


// Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr) {
    var copy = arr.slice();

    for(var i = 0; i < copy.length; i++) {
        arr.splice(i + 1 + (arr.length - copy.length), 0, copy[i]);
    }
    return arr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false])); // [4,4, "Ulysses", "Ulysses", 42, 42, false, false]