const seleciona = (elemento) => document.querySelector(elemento)
    const selecionaTodos = elemento => document.querySelectorAll(elemento)

const fotoPreenche = (fotoItem,item,index) => {
    fotoItem.setAttribute('data-key',index)
    fotoItem.querySelector('.img--heart img').src = item.Image
}

fotoJson.map((item,index) => {
    let fotoItem = document.querySelector('.models .heart').cloneNode(true)
    seleciona('.container').append(fotoItem)

    fotoPreenche(fotoItem,item,index)
})