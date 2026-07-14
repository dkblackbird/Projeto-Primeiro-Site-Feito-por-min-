// ===================================================
//      LÓGICA DE MANIPULAÇÃO DO MODAL 
// ===================================================

function abrirModal(elemento) {
    // 1. Captura os dados reais de dentro do card que foi clicado
    const tituloElemento = elemento.querySelector('h2');
    const autorElemento = elemento.querySelector('.autor');
    const imgElemento = elemento.querySelector('img');
    const resumoElemento = elemento.querySelector('.resumo-modal');
    const botoesElemento = elemento.querySelector('.botoes-modal');

    // Validações básicas de segurança para evitar erros caso falte alguma tag
    const titulo = tituloElemento ? tituloElemento.innerText : 'Sem Título';
    const autor = autorElemento ? autorElemento.innerText : 'Autor Desconhecido';
    const capaSrc = imgElemento ? imgElemento.src : '';
    const resumo = resumoElemento ? resumoElemento.innerText : 'Resumo não disponível.';
    const linksHTML = botoesElemento ? botoesElemento.innerHTML : '';

    // 2. Injeta os dados capturados dentro da estrutura do Modal
    const modalTitulo = document.getElementById('modal-titulo');
    const modalAutor = document.getElementById('modal-autor');
    const modalCapa = document.getElementById('modal-capa');
    const modalResumo = document.getElementById('modal-resumo');
    const modalBotoesCompra = document.getElementById('modal-botoes-compra');

    if (modalTitulo) modalTitulo.innerText = titulo;
    if (modalAutor) modalAutor.innerText = `Autor: ${autor}`;
    if (modalCapa) modalCapa.src = capaSrc;
    if (modalResumo) modalResumo.innerText = resumo;
    if (modalBotoesCompra) modalBotoesCompra.innerHTML = linksHTML;

    // 3. Exibe o modal na tela mudando o display para flex
    const modal = document.getElementById('modal-livro');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function fecharModal() {
    const modal = document.getElementById('modal-livro');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Fecha o modal se o usuário clicar no fundo escuro (fora da caixinha branca)
window.addEventListener('click', (evento) => {
    const modal = document.getElementById('modal-livro');
    if (modal && evento.target === modal) {
        modal.style.display = 'none';
    }
});

// ===================================================
//      LÓGICA DA BARRA DE PESQUISA
// ===================================================
document.addEventListener('DOMContentLoaded', () => {
    const barraPesquisa = document.getElementById('barra-pesquisa');
    const livros = document.querySelectorAll('.card-livro');

    if (!barraPesquisa) {
        console.error("Erro: Não encontrei nenhuma barra com o id='barra-pesquisa' no seu HTML.");
        return;
    }

    function filtrarLivros() {
        const termoBusca = barraPesquisa.value.toLowerCase().trim();

        livros.forEach((livro) => {
            const conteudoTexto = livro.textContent.toLowerCase();
            const img = livro.querySelector('img');
            const altTexto = img ? img.getAttribute('alt').toLowerCase() : '';

            if (conteudoTexto.includes(termoBusca) || altTexto.includes(termoBusca)) {
                livro.style.display = '';
            } else {
                livro.style.display = 'none';
            }
        });
    }

    barraPesquisa.addEventListener('input', filtrarLivros);
    barraPesquisa.addEventListener('keydown', (evento) => {
        if (evento.key === 'Enter') {
            evento.preventDefault();
            filtrarLivros();
        }
    });
});