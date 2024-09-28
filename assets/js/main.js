// start quiz

const list_qtd_players = document.querySelector('#list-qtd')
const playears = document.querySelector('#players')
const option_player = playears.getElementsByTagName('input')
var qtd_players = 2

window.addEventListener('DOMContentLoaded', ()=>{
    for (var i = qtd_players; i < option_player.length; i++) {
        option_player[i].classList.add('jogadores-invalidos')
        option_player[i].disabled = true;
    }
})

list_qtd_players.addEventListener('change', (e)=>{
    qtd_players = e.target.value

    for (player of option_player) {
        player.classList.remove('jogadores-invalidos')
        player.disabled = false;     
    }

    for (var i = qtd_players; i < option_player.length; i++) {
        option_player[i].classList.add('jogadores-invalidos')
        option_player[i].disabled = true;
    }
})

function startRandom(list_name) {
    console.log('ola');
    
}

// get names of players
document.querySelector('#play').addEventListener('click', ()=>{
    const players_run = []
    for (var i = 0; i < qtd_players; i++) {
        players_run.push(option_player[i].value)
    } 
    console.log(players_run);
})