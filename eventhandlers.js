$(function(){
    //submit
    $(".submit").on("click",function(e){
        var form = $(this).closest("form");

        if(form.length == 1){
            var flg = true;
            var confirm_message = $(this).data("confirm");
            if(typeof confirm_message != "undefined"){
                if(confirm(confirm_message) === false){
                    flg = false;
                }
            }

            if(flg){
                var action = $(this).data("action");
                if(typeof action != "undefined"){
                    form.attr("action",action);
                }

                var target = $(this).data("target");
                if(typeof target != "undefined"){
                    form.attr("target",target);
                }else{
                    form.attr("target","_self");
                }

                form.submit();
            }
        }
    });
});
