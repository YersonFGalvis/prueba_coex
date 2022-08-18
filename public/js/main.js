
 const carrito1 = document.querySelector('.carrito1');
 const carrito2 = document.querySelector('.carrito2');
 const carrito3 = document.querySelector('.carrito3');
 const carrito4 = document.querySelector('.carrito4');

 let articulosCarrito = [];

 cargarEventListeners();

function cargarEventListeners(){

//cuando se agrega un curso dandole al boto agregar

carrito1.addEventListener('click', agregarProducto);
carrito2.addEventListener('click', agregarProducto);
carrito3.addEventListener('click', agregarProducto);
carrito4.addEventListener('click', agregarProducto);

}


//funciones
function agregarProducto(e){

    e.preventDefault();
        const productoSeleccionado = e.target.parentElement.parentElement;
        console.log(productoSeleccionado);
        alert('producto añadido al carrito,revisar consola, no me dio tiempo a implementar el modal, es facil porque ya puedo obtener mi backend del DOM pero no dormí nada:D')
        leerDatos(productoSeleccionado);

}

function leerDatos(producto){

    //crear objeto con el contenido del curso seleccionado

    const infoProducto = {
        nombre: producto.querySelector('.nombreProducto').textContent,
        precio: producto.querySelector('.precioProducto').textContent,
    }

    //agrega elementos al arreglo del carrito

    articulosCarrito = [...articulosCarrito, infoProducto];

    console.log(articulosCarrito);
}
