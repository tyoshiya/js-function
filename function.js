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
