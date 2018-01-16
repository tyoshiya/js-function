$(function(){
//***********************************************
//
// get first key
//
// @map hash
//
//***********************************************
    var getFirstKey = function(map){
        for (var key in map) {
            return key;
        }
        return null;
    }

//***********************************************
//
// get random number
//
// @digit int
// @decimal_digit int
//
//***********************************************
    var getRandom = function(digit,decimal_digit){
        if(typeof digit == "undefined"){
            return 0;
        }
        var random = Math.random();
        random *= Math.pow(10,digit);
        if(typeof decimal_digit != "undefined"){
            random *= Math.pow(10,decimal_digit);
            random = Math.ceil(random);
            return random / Math.pow(10,decimal_digit);
        }else{
            return Math.ceil(random);
        }
    }
});
