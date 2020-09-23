// Variables
const transferenciasRecargado = document.querySelectorAll('.valor-recarga'),
      transactionContainer = document.querySelector('.last-transactions__container'),
      transationsItems = document.querySelectorAll('.last-transactions__item'),
      transationsValues = document.querySelectorAll('.last-transactions__value');


// Event Listeners
transferenciasRecargado.forEach((valor) => {
    let number = Number(valor.textContent);
    valor.textContent = `$ ${new Intl.NumberFormat().format(number)}`;
});

transactionContainer.addEventListener('click', seleccionarTransaccion);


// Funciones
function seleccionarTransaccion(e) {
    eliminarClaseFilaActiva();
    let transaccion = e.target;
    if(transaccion.classList.contains('last-transactions__value')) {
        añadirClaseActivaFila(transaccion);
    }

    if(transaccion.classList.contains('last-transactions__item')) {
        añadirClaseActivaFila(transaccion.children[0]);
    }
}

        function añadirClaseActivaFila(transaccion) {
            transaccion.parentElement.classList.add('fila-activa');
            document.querySelectorAll('.fila-activa span').forEach((item) => {
                item.classList.add('fila-activa-color');
            });
        }   

        function eliminarClaseFilaActiva() {
            transationsItems.forEach((element) => {
                element.classList.remove('fila-activa');
            });
            transationsValues.forEach((value) => {
                value.classList.remove('fila-activa-color');
            });
        }