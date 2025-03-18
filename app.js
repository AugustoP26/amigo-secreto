let listaDeAmigos = [];
const lista = document.getElementById("listaAmigos");
const inputNombre = document.getElementById("amigo");
const resultado = document.getElementById("resultado");

// Funcion para agregar amigo a la lista
function agregarAmigo() {
    const nombreAmigo = inputNombre.value.trim();

    if (!nombreAmigo) {
        alert("Por favor, escriba un nombre válido.");
        return;
    }

    if (listaDeAmigos.includes(nombreAmigo)) {
        alert("Amigo agregado.");
        return;
    }

    listaDeAmigos.push(nombreAmigo);
    actualizarLista();
    inputNombre.value = ""; // Limpiar campo de entrada
}

// Funcion para actualizar lista de amigos en la interfaz
function actualizarLista() {
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaDeAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = amigo;

        // Crear boton de remover
        const botonRemover = document.createElement("button");
        botonRemover.textContent = "Remover";
        botonRemover.classList.add("button-remove"); // Agregar a clase button-remove
        botonRemover.onclick = () => removerAmigo(index);

        item.appendChild(botonRemover);
        lista.appendChild(item);
    });
}

// Funcion para remover amigo de la lista
function removerAmigo(index) {
    listaDeAmigos.splice(index, 1);
    actualizarLista();
}

// Funcion para sortear Amigo Secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Agregue al menos un amigo para empezar.");
        return;
    }

    const amigoSorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

// Funcion para limpiar lista de resultado del sorteo
function limpiarLista() {
    listaDeAmigos = [];
    actualizarLista();
    resultado.innerHTML = "";
}