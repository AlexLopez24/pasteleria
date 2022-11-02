window.onload = function () {
    const arrayPasteles = [
        pastel = {
            id: 'pChocolate',
            nombre: 'Pastel de chocolate',
            ingredientes: ['Chocolate', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/chocolate.jpg',
            precio: 30,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelVainilla = {
            id: 'pVainilla',
            nombre: 'Pastel de vainilla',
            ingredientes: ['Vainilla', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/Vainilla.jpg',
            precio: 10,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelCoco = {
            id: 'pCoco',
            nombre: 'Pastel de Coco',
            ingredientes: ['Coco', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/coco.jpg',
            precio: 14,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelMango = {
            id: 'pMango',
            nombre: 'Pastel de Mango',
            ingredientes: ['Mango', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/mango.jpg',
            precio: 20,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelCardamomo = {
            id: 'pCardamomo',
            nombre: 'Pastel de Cardamomo',
            ingredientes: ['Cardamomo', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/cardamomo.jpg',
            precio: 22,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelFresa = {
            id: 'pFresa',
            nombre: 'Pastel de Fresa',
            ingredientes: ['Fresa', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/fresa.jpg',
            precio: 25,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelAlmendra = {
            id: 'pAlmendra',
            nombre: 'Pastel de Almendra',
            ingredientes: ['Almendra', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/almendra.jpg',
            precio: 65,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelMora = {
            id: 'pMora',
            nombre: 'Pastel de Mora',
            ingredientes: ['Mora', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/mora.jpg',
            precio: 55,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelTresLeches = {
            id: 'pTresLeches',
            nombre: 'Pastel de Tres Leches',
            ingredientes: ['Tres Leches', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/tresLeches.jpg',
            precio: 100,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelZanahoria = {
            id: 'pZanahoria',
            nombre: 'Pastel de Zanahoria',
            ingredientes: ['Zanahoria', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/zanahoria.webp',
            precio: 10,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        },
        pastelNaranja = {
            id: 'pNaranja',
            nombre: 'Pastel de Naranja',
            ingredientes: ['Naranja', 'mermelada', 'Frutas a tu eleccion'],
            url: '/img/pastelesCatalogo/naranja.jpg',
            precio: 18,
            icono: '/img/LogoPasteleriaRedes/LogoPasteleria.png'
        }
    ];
    const arrayAdornos = [
        chispas ={
            id: 'adornoChispas',
            nombre: 'Chispas de colores',
            url: '/img/adornos/chispas.jpg'
        },
        letrero = {
            id: 'letPersonalizable',
            nombre: 'Letrero personalizable',
            url: '/img/adornos/cumple.jpg'
        },
        figuras = {
            id: 'adornoFiguras',
            nombre: 'Figuras 3D',
            url: '/img/adornos/figuras.jpg'
        },
        galletas = {
            id: 'adornoGalletas',
            nombre: 'Galletas',
            url: '/img/adornos/galletas.jpg'
        }
    ]
    //Definiendo listas de pasteles
    const pastelesFrios = document.querySelector('#listaPastelesFrios');
    const pastelesNormales = document.querySelector('#listaPastelesNormales');
    //Extrayendo datos de objetos 
    const { nombre, icono, url, precio, id, ingredientes } = pastel;
    const { nombre: nombreC, url: urlC, precio: precioC, id: idC, ingredientes: ingredienteC } = pastelCoco;
    const { nombre: nombreM, url: urlM, precio: precioM, id: idM, ingredientes: ingredienteM } = pastelMango;
    const { nombre: nombreV, url: urlV, precio: precioV, id: idV, ingredientes: ingredienteV } = pastelVainilla;
    const { nombre: nombreCar, url: urlCar, precio: precioCar, id: idCar, ingredientes: ingredienteCar } = pastelCardamomo;
    const { nombre: nombreF, url: urlF, precio: precioF, id: idF, ingredientes: ingredienteF } = pastelFresa;
    const { nombre: nombreA, url: urlA, precio: precioA, id: idA, ingredientes: ingredienteA } = pastelAlmendra;
    const { nombre: nombreMora, url: urlMora, precio: precioMora, id: idMora, ingredientes: ingredienteMora } = pastelMora;
    const { nombre: nombreTres, url: urlTres, precio: precioT, id: idT, ingredientes: ingredienteT } = pastelTresLeches;
    const { nombre: nombreZ, url: urlZ, precio: precioZ, id: idZ, ingredientes: ingredienteZ } = pastelZanahoria;
    const { nombre: nombreN, url: urlN, precio: precioN, id: idN, ingredientes: ingredienteN } = pastelNaranja;
    // Agregando pastel a la seccion de la semana - linea 31
    agregarPastel(nombre, url, pastelesFrios, precio, id, ingredientes);  //Pastel de chocolate
    agregarPastel(nombreM, urlM, pastelesFrios, precioM, idM, ingredienteM); //Pastel de Mango
    agregarPastel(nombreCar, urlCar, pastelesNormales, precioCar, idCar, ingredienteCar);//Pastel de cardamomo
    agregarPastel(nombreV, urlV, pastelesNormales, precioV, idV, ingredienteV);//Pastel de vainilla
    agregarPastel(nombreC, urlC, pastelesNormales, precioC, idC, ingredienteC);//Pastel de  coco
    agregarPastel(nombreF, urlF, pastelesFrios, precioF, idF, ingredienteF); //Pastel de Fresa
    agregarPastel(nombreA, urlA, pastelesFrios, precioA, idA, ingredienteA); //Pastel de almendra
    agregarPastel(nombreMora, urlMora, pastelesNormales, precioMora, idMora, ingredienteMora); //Pastel de mora
    agregarPastel(nombreTres, urlTres, pastelesFrios, precioT, idT, ingredienteT); // Pastel de tres leches
    agregarPastel(nombreZ, urlZ, pastelesFrios, precioZ, idZ, ingredienteZ); // Pastel de zanahoria
    agregarPastel(nombreN, urlN, pastelesFrios, precioN, idN, ingredienteN); //Pastel de naranja
    const carrito = document.querySelector('#carritoCompra');
    const modalCarrito = document.querySelector('#contenedorCarritoDeCompras');
    const contenedorCarrito = document.querySelector('#contenedorArticulos');
    const contenedorConfirmacion = document.querySelector('#contenedorCompras');
    
    modalCarrito.style.display = "none"
    //Agrega productos a la seleccion de la semana
    function agregarPastel(nombre, url, nombreLista, precio, id, ingrediente) {
        let lista = document.createElement('li');
        lista.classList.add('seleccionSemana');
        lista.innerHTML = `
        <h3>${nombre}</h3>
        <img src="${url}" alt='pasteles' width="auto" height="auto"> 
        <div class="infoLista">
            <p>Precio: <span> ${precio} USD<p>
            <button id='${id}' class="botonCarrito">  <img class="iconoCompra" id="${nombre}" src="/img/iconos/anadir-al-carrito.png"  alt="imagen producto"></button>
        </div>
        `;
        nombreLista.appendChild(lista);
        // 
        const agregarItem = document.querySelector(`#${id}`); // Definimos nuestro boton de agregar a carrito
        //Creamos la funcion para mostrar la confirmacion de elementos ++++++++
        agregarItem.addEventListener('click', () => {
            // Hacemos que al momento de darle click al carrito se le agregue un estilo al contenedor y se muestre en pantalla
            contenedorConfirmacion.style.display = "block";
            const confirmacion = document.createElement('div');
            confirmacion.classList.add('contenedorProducto');

            confirmacion.innerHTML = `
            <div id="cabeceraConfirmacion"> 
                <h3> Agregar al carrito </h3>
                <button id="cerrarVentana" > <img alt="cerrarVentana"  src="/img/iconos/cerrar.png"> </button>
            </div>
            <div id="contenedorInformacionExtras">
                <div id="infoPastel">
                    <h3>${nombre}</h3>
                    <img src="${url}" alt='pasteles' width="20px" height="20px"> 
                    <p>Precio: <span> ${precio} USD</p>
                    <p>Ingredientes: ${ingrediente} </p>
                </div>
                <div id="extrasPastel">
                    <h3> Agregar extras </h3>
                    <div> 
                    <p> Combinar con otro pastel</p>
                    <select id="listaPasteles">
                    <option> sin combinar </option>
                    </select>
                    <p> Agregar algun adorno al pastel </p>
                    <ul id="listaAdornos">
                    
                    </ul>
                    </div>
                </div>
            </div>
            <div id="contenedorBoton">
            <button id="comprar"> Agregar al carrito </button>
            </div>
        `;
            contenedorConfirmacion.innerHTML = confirmacion.outerHTML;
            console.log(id);
           //Recorrermos nuestro arrayPasteles para poder agregarlo a la etiqueta select en nuestros extras del pedido
            for(let i in arrayPasteles)
            { 
                document.getElementById("listaPasteles").innerHTML += "<option value='"+arrayPasteles[i].nombre+"'>"+arrayPasteles[i].nombre+"</option>"; 

            }
            for(let x in arrayAdornos)
            {
                document.getElementById('listaAdornos').innerHTML += "<li>" + `<img src="${arrayAdornos[x].url}" id="adornos">` + arrayAdornos[x].nombre +`<input type='checkbox' id='${arrayAdornos[x].id}' value='${arrayAdornos[x].id}_check'}>` + "</li>";
            }
            const botonComprar = document.querySelector('#comprar');
            botonComprar.addEventListener('click', () => {
                //Agregando producto al carrito 
                agregarProducto(nombre, icono, precio);
                contenedorConfirmacion.style.display = "none";
            })
            //Definimos nuestro boton para cerrar la ventana
            const cerrar = document.querySelector('#cerrarVentana');
            cerrar.addEventListener('click', () => {
                contenedorConfirmacion.style.display = "none";
            })
        });
    }
    //Agrega productos al carrito
    function agregarProducto(nombre, icono, precio) {
        let articulo = document.createElement('div');
        articulo.innerHTML = `
        <span class="articuloCarrito">
            <img class='iconoArticulo' src="${icono}" alt="pasteles" width="auto" height="auto">
            <p>${nombre} - ${precio} usd</p>
            <img class='iconoArticulo' src='/img/iconos/quitar-del-carrito.png'>
        </span>
        `;
        contenedorCarrito.appendChild(articulo);
    }
    //Esta funcion nos permite visualizar/esconder el carrito de compras
    carrito.addEventListener('click', () => {
        if (modalCarrito.style.display === "none") {
            modalCarrito.style.display = "block";
        } else {
            modalCarrito.style.display = "none"
        }
    });
};

