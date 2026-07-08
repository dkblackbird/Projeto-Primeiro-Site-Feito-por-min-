// scripts.js - Banco de dados real dos 15 livros de Filosofia e Lógica do Modal

const bancoDeLivros = {
    "a-republica": {
        titulo: "A República (Platão)",
        autor: "Platão",
        capa: "https://m.media-amazon.com/images/I/61iW5sHVzdL._SY385_.jpg",
        resumo: "Uma das obras mais influentes da filosofia ocidental, explorando a justiça e a natureza do bem.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Rep%C3%BAblica-Plat%C3%A3o/dp/6555524146/ref=sr_1_3?crid=YJYDDTN99KU0&dib=eyJ2IjoiMSJ9.u4cTnT8L9WsZ-2Nf4DGqqzCpw3q36FMASDNuoK9MBgfkw4Z-vIFHXEHF6ppByY9Gny9R9zyC1qks2yIZJq7NrPcAG7Dydsv2myfuFD0F8ed2mLy0TFBaILDOq5iTCVTWHD3DgxdTy5RmyV0K_OaUce27Ymp2got-gKVAaztEybxwQDbyU5FOo0oJTNZxTlzHCH_8ydnVMPgIJFTk5dUII8bxq7YAseIdt08gXlJ5dHvTob207EH1m8FFIQg2016Dh4cepeN3Ng9rllRFsEx4xVqeIUWzBJaUMnQRuDl058o.uV4HuSwntXPd2u9Dhabl8vp7I_0nWtrpgIgXFsWHMfQ&dib_tag=se&keywords=livro+a+republica+de+plat%C3%A3o&qid=1782999227&sprefix=livro+A+republi%2Caps%2C250&sr=8-3" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/livro-fisico-a-republica-platao-edicao-traduzida-do-ingles/up/MLBU1406712645" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "biblioteca-nietzsche": {
        titulo: "Biblioteca Nietzsche - Box com 4 Livros",
        autor: "Friedrich Nietzsche",
        capa: "https://m.media-amazon.com/images/I/71OMQZA5E7L._SY342_.jpg",
        resumo: "Uma coleção dos principais trabalhos de Nietzsche, explorando ideias sobre a vontade de poder e a transmutação dos valores.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Biblioteca-Nietzsche-Box-com-Livros/dp/6585168313/ref=asc_df_6585168313?mcid=9eb94564c7fa339c88305982cfb2d3f9&tag=googleshopp00-20&linkCode=df0&hvadid=709883381890&hvpos=&hvnetw=g&hvrand=2375647312807561735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-2201844514246&psc=1&hvocijid=2375647312807561735-6585168313-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
        `
    },
    "biblioteca-estoica": {
        titulo: "Biblioteca Estoica: Grandes Mestres Volume I",
        autor: "Epicteto, Seneca, Marcus Aurelius",
        capa: "https://m.media-amazon.com/images/I/81Jbim+G34L._SY342_.jpg",
        resumo: "Uma coleção dos principais trabalhos dos mestres estoicos, explorando ideias sobre a vida virtuosa e a resignation diante das circunstâncias.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Biblioteca-Estoica-Grandes-Mestres-livros/dp/6580921609/ref=asc_df_6580921609?mcid=ed17540f6e5334709064de61d1f1729c&tag=googleshopp00-20&linkCode=df0&hvadid=709884550003&hvpos=&hvnetw=g&hvrand=2375647312807561735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-1890013746188&psc=1&hvocijid=2375647312807561735-6580921609-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/biblioteca-estoica-grandes-mestres-volume-i-box-com-4-livros/p/MLB23821224?pdp_filters=item_id%3AMLB6880661876&from=gshop&matt_tool=65609379&matt_word=&matt_source=google&matt_campaign_id=22090354445&matt_ad_group_id=197094208291&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419500&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB23821224-product&matt_product_partition_id=2470629206579&matt_target_id=pla-2470629206579&cq_src=google_ads&cq_cmp=22090354445&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354445&gbraid=0AAAAAD93qcBzDd-__6mlX66WyqLVBEmJG&gclid=CjwKCAjwmJjSBhB-EiwAkZgxi2PIEuAno8Zv9w8OJNKvMcqUvjNX5L3XeximupH-yK6eZpf6p411oBoC0coQAvD_BwE" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
            <a href="https://www.magazineluiza.com.br/livro-biblioteca-estoica-grandes-mestres-box-com-4-livros/p/fjc4a6k390/li/lhgr/?&seller_id=leituraestacaobh&utm_source=google&utm_medium=cpc&utm_term=84418&utm_campaign=google_eco_per_ven_pla_lon_sor_3p_bb-br-itm-li-a-0326&utm_content=&partner_id=84418&gclsrc=aw.ds&gad_source=1&gad_campaignid=23595286710&gbraid=0AAAAAD4zZmTIlqlGdPM0auuZSd_HlfyZe&gclid=CjwKCAjwmJjSBhB-EiwAkZgxi9Gsj4WzRPEGAn2q8zv2QS8AprLqyc0IRpOc3wyddcHG3EBnV6G3FhoC1MUQAvD_BwE" target="_blank" class="botao-comprar">Comprar no Magazine Luiza</a>
        `
    },
    "o-livro-da-filosofia": {
        titulo: "O livro da filosofia",
        autor: "Vários autores",
        capa: "https://m.media-amazon.com/images/I/81lEztlbffL._SY385_.jpg",
        resumo: "O Livro da Filosofia da Globo Livros é uma obra abrangente que foge do básico. Com recursos gráficos inovadores, organiza o pensamento humano da Antiguidade ao presente através das máximas dos grandes mestres.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Livro-Filosofia-V%C3%A1rios-Autores/dp/8525063096?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/o-livro-da-filosofia-autor--varios-editora--grupo-globo-marca--ed-globo/up/MLBU1413690385" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "alem-do-bem-e-do-mal": {
        titulo: "Além do bem e do mal",
        autor: "Friedrich Nietzsche",
        capa: "https://m.media-amazon.com/images/I/51uCGBhGmDL._SY342_.jpg",
        resumo: "O clássico livro de Além do Bem e do Mal (1886) e uma obra de ruptura filosófica. Nietzsche descontrói a moralidade tradicional e a crença nos opostos 'bem' e 'mal', tratando-os como impulsos complementares.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Al%C3%A9m-do-bem-mal/dp/6559575039/ref=asc_df_6559575039?mcid=099f8147b7bf325299d1f06c9bab03b9&tag=googleshopp00-20&linkCode=df0&hvadid=709883381662&hvpos=&hvnetw=g&hvrand=2375647312807561735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-2302383797190&psc=1&hvocijid=2375647312807561735-6559575039-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/alem-do-bem-e-do-mal-alem-do-bem-e-do-mal-de-nietzsche-friedrich-editorial-verissimo-capa-mole-edico-1-em-portugus-2024/p/MLB40713613?pdp_filters=item_id%3AMLB3964314411&from=gshop&matt_tool=65609379&matt_word=&matt_source=google&matt_campaign_id=22090354445&matt_ad_group_id=197094208291&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396419500&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=73098660&matt_product_id=MLB40713613-product&matt_product_partition_id=2454012368123&matt_target_id=pla-2454012368123&cq_src=google_ads&cq_cmp=22090354445&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=22090354445&gbraid=0AAAAAD93qcBzDd-__6mlX66WyqLVBEmJG&gclid=CjwKCAjwmJjSBhB-EiwAkZgxiwrQXBp4XkqgbMQcsbB7D4LmzTyRuTwBcN7IGojzGntunWPDc-VakhoCFb4QAvD_BwE" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "o-mito-da-caverna": {
        titulo: "O Mito Da Caverna",
        autor: "Platão",
        capa: "https://m.media-amazon.com/images/I/91hv2cST8ZL._SY385_.jpg",
        resumo: "Uma obra de formação intelectual que explica como podemos nos libertar da escuridão que nos aprisiona através da luz da verdade.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Mito-Caverna-Livro-Bolso/dp/8572839410/ref=asc_df_8572839410?mcid=1d8cac65f7373e908131bdf8117cf5c5&tag=googleshopp00-20&linkCode=df0&hvadid=709883381662&hvpos=&hvnetw=g&hvrand=2375647312807561735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-813043346061&psc=1&hvocijid=2375647312807561735-8572839410-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/o-mito-da-caverna--platao/up/MLBU1417609286" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "sobre-a-brevidade-da-vida": {
        titulo: "Sobre a Brevidade da Vida",
        autor: "Lúcio Aneu Sêneca",
        capa: "https://m.media-amazon.com/images/I/71AQ-sSDtNL._SY425_.jpg",
        resumo: "Uma das obras mais conhecidas de Sêneca é, também, um ensaio moral que traz poderosas reflexões acerca da morte, da natureza humana e da arte de viver.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Sobre-Brevidade-Vida-especial-pref%C3%A1cio-ebook/dp/B09P1W5RF5" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/sobre-a-brevidade-da-vida/p/MLB19300122?matt_tool=18956390&utm_source=google_shopping&utm_medium=organic&pdp_filters=item_id%3AMLB5022409248&from=gshop" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "o-deus-de-spinoza": {
        titulo: "O Deus De Spinoza",
        autor: "Baruch Spinoza",
        capa: "https://m.media-amazon.com/images/I/51RYlBXBmeL._SY385_.jpg",
        resumo: "Esta 3ª edição ampliada oferece uma introdução acessível à filosofia de Spinoza, explorando conceitos como a substância única e a natureza naturada.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Spinoza-F%C3%A1bio-Manuel-Tiene-Santos/dp/6500931238/ref=asc_df_6500931238?mcid=be6f66e28eb6350ebdaf4eed76b536a7&tag=googleshopp00-20&linkCode=df0&hvadid=709883381662&hvpos=&hvnetw=g&hvrand=2375647312807561735&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-2337701261694&psc=1&hvocijid=2375647312807561735-6500931238-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
        `
    },
    "meditacoes-metafisicas": {
        titulo: "Meditações Metafísicas",
        autor: "René Descartes",
        capa: "https://m.media-amazon.com/images/I/616R9G2T72L._SY425_.jpg",
        resumo: "Composta por seis meditações de caráter filosófico, a presente obra desmonta e reconstrói a ideia do eu individual ao reunir argumentos sobre a existência de Deus.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Medita%C3%A7%C3%B5es-Metaf%C3%ADsicas-Descartes/dp/8572839534?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/meditacoes-metafisicas---edipro/up/MLBU1095126726" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "pedagogia-do-oprimido": {
        titulo: "Pedagogia Do Oprimido",
        autor: "Paulo Freire",
        capa: "https://m.media-amazon.com/images/I/811oKbyTXNL._SY425_.jpg",
        resumo: "Pedagogia do oprimido é uma das obras de ciências sociais e humanas mais citadas no mundo. Apresentando de forma objetiva reflexões sobre a relação entre opressores e oprimidos.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Pedagogia-do-oprimido-Paulo-Freire/dp/8577534189?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/pedagogia-do-oprimido--nova-edicao--freire-paulo/up/MLBU1128172514" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "a-natureza-do-espaco": {
        titulo: "A Natureza do Espaço",
        autor: "Milton Santos",
        capa: "https://m.media-amazon.com/images/I/61X1pWxv4QL._SY425_.jpg",
        resumo: "O livro A Natureza do Espaço: Técnica e Tempo, Razão e Emoção é uma obra fundamental de Milton Santos. Integrando técnica, tempo e globalização.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Natureza-Espa%C3%A7o-T%C3%A9cnica-Tempo-Emo%C3%A7%C3%A3o/dp/8531407133" target="_blank" class="botao-comprar">Comprar na Amazon</a>
        `
    },
    "pequeno-manual-antirracista": {
        titulo: "Pequeno Manual Antirracista",
        autor: "Djamila Ribeiro",
        capa: "https://m.media-amazon.com/images/I/71D3cAdm0GL._SY385_.jpg",
        resumo: "O Pequeno Manual Antirracista é uma obra essencial que apresenta lições fundamentais. Contextualiza as origens do racismo estrutural e propõe ações práticas.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Pequeno-manual-antirracista-Djamila-Ribeiro/dp/8535932879?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/pequeno-manual-antirracista-por-djamila-ribeiro/up/MLBU2257245856" target="_blank" class="botao-comprar">Mercado Livre</a>
        `
    },
    "por-que-fazemos-o-que-fazemos": {
        titulo: "Por Que Fazemos O Que Fazemos?",
        autor: "Mário Sergio Cortella",
        capa: "https://m.media-amazon.com/images/I/51jBrql3omL._SY445_SX342_ML2_.jpg",
        resumo: "Este livro é um verdadeiro manual para todo mundo que tem uma carreira mas vive se questionando sobre o presente e o futuro.",
        linksHTML: `
            <a href="https://www.amazon.com.br/Por-que-Fazemos/dp/8542207416/ref=asc_df_8542207416?mcid=3db250e65f503c768d3373699165853b&tag=googleshopp00-20&linkCode=df0&hvadid=709883381704&hvpos=&hvnetw=g&hvrand=17611821825816312976&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9074291&hvtargid=pla-334739918098&psc=1&hvocijid=17611821825816312976-8542207416-&hvexpln=0&language=pt_BR" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/libro-por-que-fazemos-o-que-fazemos-de-cortella-mario-sergio-editorial-editora-planeta-do-brasil-ltda-tapa-mole-en-portugus-2016/p/MLB19297920" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    },
    "o-dilema-do-porco-espinho": {
        titulo: "O Dilema Do Porco-Espinho",
        autor: "Leandro Karnal",
        capa: "https://m.media-amazon.com/images/I/91U5O+lJzcL._SY425_.jpg",
        resumo: "Baseado na famosa metáfora do filósofo Schopenhauer, o historiador Leandro Karnal explora o eterno conflito humano entre a necessidade de afeto e o medo de se machucar.",
        linksHTML: `
            <a href="https://www.amazon.com.br/dilema-porco-espinho-Como-encarar-solid%C3%A3o/dp/8542214366" target="_blank" class="botao-comprar">Comprar na Amazon</a>
        `
    },
    "o-principe": {
        titulo: "O Príncipe",
        autor: "Nicolau Maquiavel",
        capa: "https://http2.mlstatic.com/D_NQ_NP_947676-MLU50455021197_062022-O.webp",
        resumo: "O príncipe, escrito em 1513, demonstra como um governante deve agir seja com o exército, com os seus ministros ou com o povo para manter o poder.",
        linksHTML: `
            <a href="https://www.amazon.com.br/pr%C3%ADncipe-Nicolau-Maquiavel/dp/6555525509" target="_blank" class="botao-comprar">Comprar na Amazon</a>
            <a href="https://www.mercadolivre.com.br/livro-fisico-o-principe-nicolau-maquiavel-texto-integral/up/MLBU1423399310" target="_blank" class="botao-comprar">Comprar no Mercado Livre</a>
        `
    }
};

// --- LÓGICA DE MANIPULAÇÃO DO MODAL ---

const modal = document.getElementById('modal-livro');
const botaoFechar = document.getElementById('fechar-modal');

const modalTitulo = document.getElementById('modal-titulo');
const modalAutor = document.getElementById('modal-autor');
const modalCapa = document.getElementById('modal-capa');
const modalResumo = document.getElementById('modal-resumo');
const modalBotoesCompra = document.getElementById('modal-botoes-compra');

const cardsLivros = document.querySelectorAll('.livro-card');

cardsLivros.forEach(card => {
    card.addEventListener('click', () => {
        const livroId = card.getAttribute('data-id');
        const dadosDoLivro = bancoDeLivros[livroId];
        
        if (dadosDoLivro) {
            modalTitulo.textContent = dadosDoLivro.titulo;
            modalAutor.textContent = `Por ${dadosDoLivro.autor}`;
            modalCapa.src = dadosDoLivro.capa;
            modalResumo.textContent = dadosDoLivro.resumo;
            
            modalBotoesCompra.innerHTML = dadosDoLivro.linksHTML;
            
            modal.style.display = 'flex';
        }
    });
});

botaoFechar.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (evento) => {
    if (evento.target === modal) {
        modal.style.display = 'none';
    }
});

// ===================================================
//      LÓGICA DA BARRA DE PESQUISA (CORRIGIDA)
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

        livros.forEach(function(livro) {
            const conteudoTexto = livro.textContent.toLowerCase();
            
            const img = livro.querySelector('img');
            const altTexto = img ? img.getAttribute('alt').toLowerCase() : '';

            if (conteudoTexto.includes(termoBusca) || altTexto.includes(termoBusca)) {
                livro.style.display = 'flex';
            } else {
                livro.style.display = 'none';
            }
        });
    }

    barraPesquisa.addEventListener('input', filtrarLivros);

    barraPesquisa.addEventListener('keydown', function(evento) {
        if (evento.key === 'Enter') {
            evento.preventDefault(); 
            filtrarLivros();        
        }
    });
});