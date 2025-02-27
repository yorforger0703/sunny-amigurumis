

let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
    alert(`${produto} foi adicionado ao carrinho!`);
}

function atualizarCarrinho() {
    const contador = document.getElementById('contador-carrinho');
    if (contador) {
        contador.textContent = carrinho.length;
    }

    const listaCarrinho = document.getElementById('lista-carrinho');
    if (listaCarrinho) {
        listaCarrinho.innerHTML = '';
        carrinho.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = `${item.produto} - R$${item.preco.toFixed(2)}`;
            listaCarrinho.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    atualizarCarrinho();
});

