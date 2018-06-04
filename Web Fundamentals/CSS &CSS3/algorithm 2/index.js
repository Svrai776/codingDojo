function multiply(x,y){
    console.log(x);
    console.log(y);
}
multiply(2,3);
console.log(multiply(2,3));

//*Log 2,3,2,3

function multiply(x,y){
    return x*y;
}
multiply(2,3);
console.log(multiply(3,4));

//*return of 6 log of 12

var x = [1,2,3,4,5,10];
for(var i=0; i<5; i++)
{
   i = i + 3;
   console.log(i);
}
//* log 3,7

x=15;
console.log(x);
function awesome(){
    x=10;
    console.log(x);
}
console.log(x);
awesome();
console.log(x);

//log 15, 15, 10, 10

for(var i=0; i<15; i+=2){
    console.log(i);
 }

 //* log 0, 2, 4, 6, 8, 10, 12, 14

 for(var i=0; i<3; i++){
    for(var j=0; j<2; j++){ 
        console.log(i*j);
    }
 }

 //* log 0, 0, 0, 1, 0, 2

 function looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<x; j++){ 
           console.log(i*j);
       }
    }
 }
 z = looping(3,3);
 console.log(z);

 //* log 0, 0, 0, 0, 1, 2, 0, 2, 4


 functioncopy looping(x,y){
    for(var i=0; i<x; i++){
       for(var j=0; j<y; j++){ 
          console.log(i*j);
       }
    }
    return x*y;
 }
 z = looping(3,5);
 console.log

 //* 0,0,0,0,0,0,1,2,3,4,0,2,4,6,8


