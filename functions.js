$(function(){
//***********************************************
//
// 配列の一倍最初のキーを返す
//
//***********************************************
let getFirstKey = function(arr_or_hash){
    for (let key in arr_or_hash) {
        return key;
    }
    return null;
}

//***********************************************
//
// 配列の一番最後のキーを取得
//
//***********************************************
let getLastKey = function(arr_or_hash){
    let i = 1,
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
    let getRandom = function(digit,decimal_digit){
        if(typeof digit == "undefined"){
            return 0;
        }
        let random = Math.random();
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
    let getRandomRange = function(min,max){
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
    let sortarr_or_hash = function(arr_or_hash,key,orderby){
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
let getHeight = function(obj,inout,percentage){
    if($(obj).length == 0){
        return 0;
    }
    
    let height = 0;
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
let getKeys = function(arr_or_hash){
    let keys = [];
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
let getNow = function(format,date){
    if(typeof format == "undefined"){
        format = "Y-m-d";
    }
    let split_format = [];
    let format_len = format.length;
    for(i = 0; i < format_len; i++){
        split_format.push(format.slice(i,(i + 1))); 
    }

    let new_date;
    if(typeof date == "undefined"){
        new_date = new Date(); 
    }else{
        new_date = new Date(date); 
    }
    let now = "";
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
let isExistsInJson = function(json,key,value){
    let exists = false;
    if(typeof json != "undefined" && typeof key != "undefined" && typeof value != "undefined"){
        for(let row of json){
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
let getFirstDataInJson = function(json,key,value){
    let first_data;
    if(typeof json != "undefined"){
        if(typeof key != "undefined" || typeof value != "undefined"){
            for(let row of json){
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

//***********************************************
//
// 要素のpaddingの値を取得する
// directionがundefinedなら、連想が配列で返す
// directionがundefinedじゃないなら数値で返す
//
// @param slector string セレクタ
// @param direction string top or left or bottom or right
//
//***********************************************
let getPadding = function(selector,direction){
    let padding = {
        top    : 0,
        bottom : 0,
        left   : 0,
        right  : 0
    };
 
    if ($(selector).length > 0) {
        $.each($(selector), function() {
            padding = {
                top    : Number($(this).css('padding-top').replace('px', '')),
                bottom : Number($(this).css('padding-bottom').replace('px', '')),
                left   : Number($(this).css('padding-left').replace('px', '')),
                right  : Number($(this).css('padding-right').replace('px', ''))
            };
        });
    }
 
    if(typeof direction != "undefined"){
        return padding[direction];
    }else{
        return padding;
    }
}

//***********************************************
//
// 要素のmarginの値を取得する
// directionがundefinedなら、連想が配列で返す
// directionがundefinedじゃないなら数値で返す
//
// @param slector string セレクタ
// @param direction string top or left or bottom or right
//
//***********************************************
let getMargin = function(selector,direction){
    let margin = {
        top    : 0,
        bottom : 0,
        left   : 0,
        right  : 0
    };
 
    if ($(selector).length > 0) {
        $.each($(selector), function() {
            margin = {
                top    : Number($(this).css('margin-top').replace('px', '')),
                bottom : Number($(this).css('margin-bottom').replace('px', '')),
                left   : Number($(this).css('margin-left').replace('px', '')),
                right  : Number($(this).css('margin-right').replace('px', ''))
            };
        });
    }
 
    if(typeof direction != "undefined"){
        return margin[direction];
    }else{
        return margin;
    }
}

//***********************************************
//
// クエリストリング取得
//
//***********************************************
let getQueryString = function(){
    let arg = new Object;
    let pair=location.search.substring(1).split('&');
    for(let i=0;pair[i];i++) {
        let kv = pair[i].split('=');
        arg[kv[0]]=kv[1];
    }

    return arg;
}

//***********************************************
//
// 指定した文字で囲む
//
//***********************************************
let surround = function(val,str){
    if(typeof str != "undefined"){
        val = str+val+str;
    }
    return val;
}

//***********************************************
//
// 要素のborder-widthの値を取得する
// directionがundefinedなら、連想が配列で返す
// directionがundefinedじゃないなら数値で返す
//
// @param slector string セレクタ
// @param direction string top or left or bottom or right
//
//***********************************************
let getBorderWidth = function(selector,direction){
    let border_width = {
        top    : 0,
        bottom : 0,
        left   : 0,
        right  : 0
    };
 
    if ($(selector).length > 0) {
        $.each($(selector), function() {
            border_width = {
                top    : Number($(this).css('border-top-width').replace('px', '')),
                bottom : Number($(this).css('border-bottom-width').replace('px', '')),
                left   : Number($(this).css('border-left-width').replace('px', '')),
                right  : Number($(this).css('border-right-width').replace('px', ''))
            };
        });
    }
 
    if(typeof direction != "undefined"){
        return border_width[direction];
    }else{
        return border_width;
    }
}
