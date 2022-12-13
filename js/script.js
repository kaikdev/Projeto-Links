function share(){
	if (navigator.share !== undefined) {
		navigator.share({
			title: 'O título da sua página',
			text: 'Um texto de resumo',
			url: 'https://seusite.com/sua_url',
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}

exibirVideo.addEventListener('click', () => {
    exibirVideo.classList.toggle('ocultar');
})

ocultarVideo.addEventListener('click', () => {
    exibirVideo.classList.toggle('ocultar');
})

exibirDescricao.addEventListener('click', () => {
    exibirDescricao.classList.toggle('ocultar');
})

ocultarDescricao.addEventListener('click', () => {
    exibirDescricao.classList.toggle('ocultar');
})

emailAtivado.addEventListener('click', () => {
    emailAtivado.classList.toggle('ativado');
    
    telefoneAtivado.classList.toggle('ativado');
    
    collapseTelefone.style.display = 'none';

    collapseEmail.style.display = 'block';
})

telefoneAtivado.addEventListener('click', () => {
    telefoneAtivado.classList.toggle('ativado');

    emailAtivado.classList.toggle('ativado');

    collapseEmail.style.display = 'none';

    collapseTelefone.style.display = 'block';
})