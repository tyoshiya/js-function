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

//***********************************************
//
// get random number beteen min and max
//
// @min int
// @max int
//
//***********************************************
    var getRandomRange = function(min,max){
        if(typeof min == "undefined" || typeof max == "undefined"){
            return 0;
        }
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

//***********************************************
//
// sort array
//
// @arr arr or hash
// @key sortkey
// @orderby "asc" or "desc"
//
//***********************************************
    var sortArr = function(arr,key,orderby){
        if(typeof arr == "undefined" || typeof key == "undefined" || typeof orderby == "undefined"){
            return arr;
        }
        if(orderby != "asc" && orderby != "desc"){
            return arr;
        }
        if(orderby == "asc"){
            return arr.sort((a,b) => {
                if (Number(a[key]) < Number(b[key])) return -1;
                if (Number(a[key]) > Number(b[key])) return 1;
                return 0;
            });
        }
        if(orderby == "desc"){
            return arr.sort((a,b) => {
                if (Number(a[key]) > Number(b[key])) return -1;
                if (Number(a[key]) < Number(b[key])) return 1;
                return 0;
            });
        }
    }
});

//***********************************************
//
// get height
//
// @obj obj height_object
// @inout string "in" or "out"
// @percentage int percentage
//
//***********************************************
var getHeight = function(obj,inout,percentage){
    if($(obj).length == 0){
        return 0;
    }
    
    var height = 0;
    if(typeof inout == "undefined" || inout === null){
        height = $(obj).height(); 
    }
    if(inout == "inner"){
        height = $(obj).innerHeight(); 
    }
    if(inout == "outer"){
        height = $(obj).outerHeight(); 
    }
    if(height > 0 && typeof percentage != "undefined" && $.isNumeric(Math.ceil(percentage))){
        height = height * (percentage / 100); 
    }

    return height;
}

//***********************************************
//
// get key arr
//
// @hash hash hash
//
//***********************************************
var getKeys = function(hash){
    var keys = [];
    for(key in hash){
        keys.push(key);
    }

    console.log(keys);
    return keys;
}
