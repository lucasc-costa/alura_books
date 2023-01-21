let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivroPorPreco)

function ordenarLivroPorPreco() {
    let livrosOrdenado = livros.sort((a,b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosOrdenado)
}