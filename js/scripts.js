$(document).ready(function(){
    $("#mycarousel").carousel({interval: 2000});
    $("#carousel-button").click(function(){
        if($("#carousel-button").children("span").hasClass("fa-pause")){
            $("#mycarousel").carousel('pause');
            $("#carousel-button").children("span").removeClass("fa-pause");
            $("#carousel-button").children("span").addClass("fa-play");
        } else{
            $("#mycarousel").carousel('cycle');
            $("#carousel-button").children("span").removeClass("fa-play");
            $("#carousel-button").children("span").addClass("fa-pause");
        }
    });
});

//showing modal trigger
$("#reserveButton").click(function(){
    $("#reserveModal").modal('show');
});
//hiding modal trigger
$("#cancelReserve").click(function(){
    $("#reserveModal").modal('hide');
});

//showing login trigger
$("#loginButton").click(function(){
    $("#loginModal").modal('show');
});
//hiding login trigger
$("#cancelLogin").click(function(){
    $("#loginModal").modal('hide');
});