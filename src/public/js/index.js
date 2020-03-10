$(function () {
    $("#add").click(function () {
        var names = $("#player").val();
        if(names !== null && names !== undefined && names !== ""){
            names.split(',').forEach((player, index) => {
                var content = $(".content");
                content.append("<div class='item'>" + player.trim() + "</div>");
            });
            $("#player").val("");
            $("#invalid").fadeOut();
        }
        else{
            $("#invalid").fadeIn();
            $("#player").focus();
        }
    });

    
 });