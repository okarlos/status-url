const buttonTest = document.getElementById("testar");
const buttonClear = document.getElementById("limpar")
const lista = document.querySelectorAll(".url");

buttonTest.addEventListener("click", () => {

    for (let i = 0; i < lista.length; i++) {
        conectaURL(lista[i].innerHTML + '/help',i);
    }
})

buttonClear.addEventListener("click", () => {

    for (let i = 0; i < lista.length; i++) {
        lista[i].classList.remove("ok");
        lista[i].classList.remove("erro");
    }
})

// refatorado o teste de conexão da URL, utilizando fetch
function conectaURL (URL, i) {

    fetch(URL)
        .then(response => {
            console.log(URL, response.status),
            lista[i].classList.add("ok") })
        .catch(erro => {
            console.log(URL, erro),
            lista[i].classList.add("erro")})
}
