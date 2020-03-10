$(function () {
    $("#add").click(function () {
        var names = $("#player").val();
        if(names !== null && names !== undefined && names !== ""){
            names.split(',').forEach((player, index) => {
                var players = $("#players");
                players.append("<div class='item'>" + player.trim() + "</div>");
            });
            $("#player").val("");
            $("#invalid").fadeOut();
        }
        else{
            $("#invalid").fadeIn();
            $("#player").focus();
        }
    });

    $("#shuffle").click(function(){
        var players = $("#players").children();

        if(players.length > 0){
            var qty = $("#qty").val();
            if(qty !== null && qty !== undefined && qty !== ""){
                var names = players.map(function() {
                    return this.innerText;
                }).get();

                names = shuffle(names);

                var qtyTeams = Math.ceil(names.length / parseInt(qty));
                for(let i = 0; i < qtyTeams; i++){
                    let removeIndex = 0;
                    names.slice(0, parseInt(qty)).forEach(function(player, index){
                        //cada i é um time, cada player aqui é um jogador que pertence a esse time
                        //agr só criar o html pra cada time e player no time
                        removeIndex++;
                    });
                    names.splice(0, removeIndex);
                }
            }
            else{
                $("#invalidQty").fadeIn();
                $("#qty").focus();
            }
        }
        else{
            $("#invalid").fadeIn();
            $("#player").focus();
        }
    });
 });

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}