const inputText = document.getElementById('input-text');
const containerMessage = document.querySelector('.container-message');

mensajeInicio()

inputText.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        let inputValue = e.target.value.toLowerCase().trim();
        inputText.value = "";
        mostrarMensaje(inputValue);
    }
})

containerMessage.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-m')){
        
    }
})

function mostrarMensaje(value){
    const mensaje = document.createElement('P');
    mensaje.textContent = value;
    const btnDelete = document.createElement('i');
    btnDelete.classList = ('bx bx-x delete-m');
    btnDelete.style.cursor = 'pointer';
    btnDelete.style.padding = '5px';
    btnDelete.style.color = 'red';
    btnDelete.style.fontSize = '25px';
    mensaje.appendChild(btnDelete);
    containerMessage.appendChild(mensaje);
    eliminarMensaje()
}

function mensajeInicio(){
        const mensaje =  document.createElement('P');
        mensaje.classList.add('alerta');
        mensaje.textContent = 'Aun no tienes pedidos';
        containerMessage.appendChild(mensaje);
}
function eliminarMensaje(){
    if(document.querySelector('.alerta')){
        document.querySelector('.alerta').remove();
    }
}