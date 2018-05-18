function a(){
    return 35;
}
console.log(a())
//* logged 35

function a(){
    return 4;
}
console.log(a()+a());
//* logged 8

function a(b){
    return b;
}
console.log(a(2)+a(4));
//* log 6

function a(b){
        console.log(b);
        return b*3;
    }
    console.log(a(3));
//* log 3, return 9, log 9

function a(b){
    return b*4;
    console.log(b);
 }
 console.log(a(10));
//* return 40, log 40

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//*console log 4

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );
//* log 10,3 log 30

function a(b){
    for(i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);
//log 3, 4

function a(){
    for(i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();
// log 2,5,8,11

function a(b,c){
    for(i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));
//* logged  0,1,2,3,4,5,6,7,8,9 returned 0, log 0,1,2,3,4,5,6,7,8,9, return 0, log 0

function a(){
    for(i=0; i<10; i++){
       for(j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}
//* no log

function a(){
    for(i=0; i<10; i++){
        for(j=0; j<10; j++){
            console.log(i,j);
        }
    console.log(j,i);
}
//* no log

z = 10;
function a(){
    z = 15;
    console.log(z);
}
console.log(z);
// log 10

z = 10;
function a(){
        z = 15;
        console.log(z);
}
a();
console.log(z);
//log 15, log 15

z = 10;
function a(){
    z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);
//log 15, return 15, log 15







