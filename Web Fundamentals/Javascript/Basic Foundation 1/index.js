//* Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function get_array (){
    var arr= [];
    for(var i=0; i<256; i++){

        arr.push(i);
        console.log(i);
    }

    return arr;
}
get_array();

//*Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function sum_of_even_numbers(){
    var sum=0;
    for(i=1; i<1001; i++){
        if(i%2===0){
            sum= sum + i;

            console.log(i);
        }
    }
    return sum;
}
sum_of_even_numbers();

//Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function sum_of_odd_numbers(){
    var sum=0;
    for( var i=0; i<5000; i++){
        if(i%2!==0){
            sum= sum +i;
            console.log(i);
        }
    }

    return sum;
}
sum_of_odd_numbers();

//Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sum_of_array(){
    var sum= 0;
    for(var i=0; i<arr.length; i++){

        sum= arr[i]+1;
    }
    return sum;
}
var myArray = [2,3];
sum_of_array(myArray);


//Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7
function max_of_array(arr){
    var max= [];
    for( var i= 0; i<arr.length; i++){
        if( arr[i]>max){
            max= arr[i];
        }

    }
    return max;
}

var myarray= [1,2,3,4];
max_of_array(myarray);



//Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function average_of_array(arr){
    var sum= 0;

    for(var i= 0; i<arr.length; i++){
        sum = sum + arr[i];

    }
    return sum/arr.length
}

var myArray=[1,4,7];
var avg= average_of_array(myArray);
console.log(avg);

//Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function array_odd(){

    var arr= [];
    for(var i=0; i<50; i++){
        if(i%2!==0){

          arr.push(i);

        }
    }
    return arr;
}

var odds = array_odd();

console.log(odds);

//Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterThanY(arr, Y){

    var count = 0;

    for(var i = 1; i< arr.length; i++){

        if( arr[i]>Y){

            count ++;
          console.log(count);
        }
    }


    return count;

}
var arr = [1,2,3,4,5];
greaterThanY(arr,3);

//Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squared(arr){
    var sum = 0;

    for( var i = 0; i < arr.length; i++){

        sum = arr[i]*arr[i];


    }

    return sum;

}

var arr = [1,2,3,4];

squared(arr);

//Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function negArr(arr){
    for( var i = 0; i < arr.length; i++){

        if( arr[i] < 0){

            arr[i] = 0;

        }
    }
    return arr;
}

var arr = [ -1, -7, -9, 1, 2];

negArr(arr);

//Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function maxminavg(arr){

    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for ( var i = 0; i < arr.length; i++){

      if ( arr[i]>max){

        max = arr[i];
      }

      if ( arr[i]< min){
        min = arr[i];
      }

      sum = sum + arr[i];

    }

    var avg = sum/arr.length;

    return [max, min, avg];


  }

  var arr = [3,5,6,0];
  var output = maxminavg(arr);
  console.log(output);

  //Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).


  function swapArr(arr){

    var temp = arr [0];
    arr[0]= arr[arr.length - 1];
    arr[arr.length - 1]= temp;

    return arr;



}
    var arr= [1,2,3,4];

    swapArr(arr);

    console.log(arr);


    //Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

    function negstring(arr){

        for( var i = 0; i< arr.length; i++){

            if(arr[i]<0){

                arr[i]='Dojo';

            }
        }
    }

    var arr= [-1,-2,-7,3];
    negstring(arr);

