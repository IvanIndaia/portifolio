

function Start() {
    // let jogador1 = prompt("Digite o nome do Jogador 1")
    // let jogador2 = prompt("Digite o nome do Jogador 2")

    // let jog1 = document.getElementById("j1")
    // let jog2 = document.getElementById("j2")

    // jog1.innerHTML = `${jogador1}`
    // jog2.innerHTML = `${jogador2}`

    document.getElementById("Start").style.display = 'none'
    document.querySelector("body").style.overflow = 'auto'
}

$('.nav-link a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});
