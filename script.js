const buttonOrder = document.querySelector("#button-order")
/*buttonOrder.addEventListener("click", () => { document.body.innerHTML += `<p>Objednáno.</p>` })*/

buttonOrder.addEventListener("click", (e) => {
    //document.querySelector("#button-order").textContent = "Ahoj1"
    e.target.textContent = "Objednáno"
})

