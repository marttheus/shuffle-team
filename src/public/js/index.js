let playerNumber = 1

$(function () {
    $("#add").click(function () {
        var names = $("#player").val();
        if(names !== null && names !== undefined && names !== ""){

            listOfNames = []

            if(isNaN(Number(names[0])) == false){
                temp = names.replace(/\d+/g, '').split('-')
                listOfNames = temp.splice(1, temp.length - 1)
            }
            else{
                listOfNames = names.split(',')
            }
            
            listOfNames.forEach((player, index) => {
                var players = $("#players");
                players.append("<div class='item'>" + playerNumber + ' - ' + player.trim() + "</div>");
                playerNumber = playerNumber + 1
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
                    $("#result").append("<div id='" + i + "' class='team'><h7 class='title'>Time - " + (parseInt(i) + 1) + "</h7><hr></div>");
                    var team = $(".team#" + i);
                    let removeIndex = 0;
                    names.slice(0, parseInt(qty)).forEach(function(player, index){
                        //cada i é um time, cada player aqui é um jogador que pertence a esse time
                        //agr só criar o html pra cada time e player no time

                        team.append("<div class='s_player'>" + player + "</div>")
                        removeIndex++;
                    });
                    names.splice(0, removeIndex);
                }

                $("#register").hide();
                $("#result").show();
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