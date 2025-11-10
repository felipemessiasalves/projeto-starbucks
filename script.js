let imagem = document.querySelector(".imagem-copo")
let fundo = document.querySelector(".circulo")

function trocaImagem(address) {
  imagem.src = address
}

function trocaFundo(cor) {
  fundo.style.background = (cor)
}

