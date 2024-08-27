const list_players = document.querySelector('#list-qtd')
const playears = document.querySelector('#players')

list_players.addEventListener('change', (e)=>{
    const qtd_players = e.target.value

    const option_player = playears.getElementsByTagName('input')

    for (player of option_player) {
        player.classList.remove('jogadores-invalidos')
        
    }

    for (var i = qtd_players; i < option_player.length; i++) {
        option_player[i].classList.add('jogadores-invalidos')
        
    }
})

document.querySelector('#play').addEventListener('click', ()=>{
    console.log()
    
})
