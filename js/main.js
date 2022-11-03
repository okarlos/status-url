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
        console.log(URL, 'falhou'),
        lista[i].classList.add("erro")})
}

// primeira tentativa de teste da URL, não conseguia pegar os erros
// function conectaURL(URL, i) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", URL);
//     xhr.addEventListener("load", () => {
//         console.log(URL +" - "+ xhr.status) 
//         if (xhr.status === 200) {
//             lista[i].classList.add("ok")
//         }
//     })
//     xhr.send();
// }