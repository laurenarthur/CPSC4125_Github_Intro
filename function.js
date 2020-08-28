$(document).ready(function() {
    //all custom jquery will go here
    //$(".jumotron-button").click(function(){
    //      $(".test").html("<b>Hello world!</b>");
    // }

    const a; //doesn't change
    var b = 1; //can change larger scope
    let c = 2; //can change smaller scope

    if( b == 2) { //falsy == !=

    } else if ( c === 3){ //same type === !==

    } else {

    }

    var d = b==2 && c ===1?"yes": a != null? "yes":"no"; //ternary condition ? true: false return(ternary)

    //basic arithmatic + - x /, modulus, 1+1=11 or b+1=11 not always going to be 2 (wasn't set as number)

    //string, number, array[], json{}

    //array[]
    //sort, forEach, push, pop, shift

    var xkcdJson = {title: "Standard Model Changes",
                    day: "26"}
    var xcdDay = xkcdJson.day

    //GET, PUT, POST, DELETE | CREATE, RETRIEVE, UPDATE, DELETE (CRUD)

    for(var i =0; i < something; i++){
        
    }
    something.forEach()

    function firstFunction(variables){
        //process input
        return variables + 1;        
        //return something
    }

    Promise(function(){
        setTimeout(x);
        //what you're waiting on
    })


});
