$(function(){
//***********************************************
//
// 配列の一倍最初のキーを返す
//
//***********************************************
var getFirstKey = function(arr_or_hash){
    for (var key in arr_or_hash) {
        return key;
    }
    return null;
}

//***********************************************
//
// 配列の一番最後のキーを取得
//
//***********************************************
var getLastKey = function(arr_or_hash){
    var i = 1,
        len = Object.keys(arr_or_hash).length
        lastkey = "";

    $.each(arr_or_hash,function(key,val){
        if(i == len){
            lastkey = key;
        }
        i++;
    });
    return lastkey;
}

//***********************************************
//
// ランダムな数値を返す 
//
// @digit 桁数
// @decimal_digit 小数点以下桁数
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
// 指定の数値の範囲内でランダムな桁数を返す
//
// @min int 最小値
// @max int 最大値
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
// 配列のソート
//
// @arr arr or hash
// @key sortkey
// @orderby "asc" or "desc"
//
//***********************************************
    var sortarr_or_hash = function(arr_or_hash,key,orderby){
        if(typeof arr_or_hash == "undefined" || typeof key == "undefined" || typeof orderby == "undefined"){
            return arr_or_hash;
        }
        if(orderby != "asc" && orderby != "desc"){
            return arr_or_hash;
        }
        if(orderby == "asc"){
            return arr_or_hash.sort((a,b) => {
                if (Number(a[key]) < Number(b[key])) return -1;
                if (Number(a[key]) > Number(b[key])) return 1;
                return 0;
            });
        }
        if(orderby == "desc"){
            return arr_or_hash.sort((a,b) => {
                if (Number(a[key]) > Number(b[key])) return -1;
                if (Number(a[key]) < Number(b[key])) return 1;
                return 0;
            });
        }
    }
});

//***********************************************
//
// 要素の高さを取得
//
// @obj obj 高さを取得したいオブジェクト
// @inout string "inner" or "outer"
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
// 配列のキーを全て取得する
//
// @hash hash hash
//
//***********************************************
var getKeys = function(arr_or_hash){
    var keys = [];
    for(key in arr_or_hash){
        keys.push(key);
    }

    return keys;
}

//***********************************************
//
// 指定した日付を指定したフォーマットで取得する
//
// @param format string フォーマット文字列
//  @default Y-m-d
// @param date string 指定する日付
//  @default 本日の日付
//
//***********************************************
var getNow = function(format,date){
    if(typeof format == "undefined"){
        format = "Y-m-d";
    }
    var split_format = [];
    var format_len = format.length;
    for(i = 0; i < format_len; i++){
        split_format.push(format.slice(i,(i + 1))); 
    }

    var new_date;
    if(typeof date == "undefined"){
        new_date = new Date(); 
    }else{
        new_date = new Date(date); 
    }
    var now = "";
    split_format.forEach(function(val){
        switch (val) {
            case "Y":
                now+= new_date.getFullYear();       
                break;

            case "m":
                now+= ("00" + (new_date.getMonth() + 1)).slice(-2);
                break;

            case "d":
                now+= ("00" + (new_date.getDate())).slice(-2);
                break;

            case "H":
                now+= ("00" + (new_date.getHours())).slice(-2);
                break;

            case "i":
                now+= ("00" + (new_date.getMinutes())).slice(-2);
                break;

            case "s":
                now+= ("00" + (new_date.getSeconds())).slice(-2);
                break;

            default:
                now+= val;
        }
    });

    return now;
}

//***********************************************
//
// JSONのなかに特定のキーが特定の値のデータがあるか
//
// @param json json
// @param key string 走査するキー
// @param value string 走査する値
//
//***********************************************
var isExistsInJson = function(json,key,value){
    var exists = false;
    if(typeof json != "undefined" && typeof key != "undefined" && typeof value != "undefined"){
        for(var row of json){
            if(typeof row[key] != "undefined"){
                if(row[key] == value){
                    exists = true;
                    break;
                }
            }
        }
    }
    return exists;
}

//***********************************************
//
// JSONの中で特定のキーが特定の値の最初のデータを取得
// keyとvalueがundefinedの場合はJSONの最初のデータを返す
//
// @param json json
// @param key string 走査するキー
// @param value string 走査する値
//
//***********************************************
var getFirstDataInJson = function(json,key,value){
    var first_data;
    if(typeof json != "undefined"){
        if(typeof key != "undefined" || typeof value != "undefined"){
            for(var row of json){
                if(typeof row[key] != "undefined"){
                    if(row[key] == value){
                        first_data = row;
                        break;
                    }
                }
            }
        }else{
            first_data = json[0]; 
        }
    }
    return first_data;
}
