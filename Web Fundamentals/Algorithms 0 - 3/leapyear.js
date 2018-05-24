function leapYear(){

    for ( var i = 2018 ; i <3000; i ++){
        if ( i % 4 === 0){

        }

        if ( i % 100){
          continue;

        }

        if ( i % 400 === 0){
          console.log(i);
        }
    }

}

leapYear();