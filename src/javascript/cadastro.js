document.getElementById('form').addEventListener('click',formulario)

function formulario() {
	conteudo = document.querySelectorAll('#cont')

	conteudo.forEach(i => {
		i.innerHTML = ''
	})

	conteudo[0].innerHTML= ' <form id=formulario ><h2> login </h2> <span> Nome: <input required > </span> <br> <span> E-mail: <input required > </span> <br> <span> Senha: <input required> </span> <button id="confirmar" type="submit">confimar</button> </form>'
	conteudo[0].classList.add('center')

	document.getElementById('formulario').addEventListener('submit', passou)

	function passou(){

		console.log('formulario enviado')
		conteudo[0].innerHTML = '<h2><span>cadastro</span> feito com sucesso</h2>'

	}

}