$(document).ready(function(){
    //show the register form
    $("#signup").click(function(){
        $("#first").slideUp("slow",function(){
            $("#second").slideDown("slow");
        });
    })
    //show the login form
    $("#signin").click(function(){
        $("#second").slideUp("slow",function(){
            $("#first").slideDown("slow");
        });
    })
});