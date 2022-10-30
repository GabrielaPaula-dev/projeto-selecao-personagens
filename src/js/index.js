const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    const idSelecionado = personagem.attributes.id.value;
    
    if(idSelecionado==='yumeko-jabami')return;

    personagem.addEventListener('mouseenter', () => {
   
    const personagemSelecionado = document.querySelector('.selecionado');
    
    personagemSelecionado.classList.remove('selecionado');

    personagem.classList.add('selecionado');

    const imagemJogador2 = document.getElementById('personagem-jogador-2');
   
    imagemJogador2.src = `src/imagens/${idSelecionado}.png`;

    const nomeJogador2 = document.getElementById('nome-jogador-2');
    
    const nomeSelecionado = personagem.getAttribute('data-name');

    nomeJogador2.innerHTML = nomeSelecionado;

  });
});
