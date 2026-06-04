const catalogo = document.getElementById("catalogo");
const categoriaSelect = document.getElementById("categoria");
const modalImg = document.getElementById("modalImg");


let soloOfertas = false;
let imagenesActuales = [];
let indice = 0;

function getModalPuntos() {
    return document.querySelectorAll(".punto-modal");
}

function actualizarPuntosModal() {

    const puntos = document.querySelectorAll("#modal .punto-modal");

    if (!puntos.length) return;

    puntos.forEach((p, i) => {
        p.classList.toggle("activo", i === indice);
    });
}

/* -------------------------
   FORMATO PRECIO
------------------------- */
function formatoPrecio(n) {
    return "$" + Number(n).toLocaleString("es-CL");
}

/* -------------------------
   CATEGORÍAS
------------------------- */
function cargarCategorias() {

    const categorias = [
        ...new Set(productos.flatMap(p => p.categoria))
    ];

    categorias.forEach(categoria => {
        const opcion = document.createElement("option");
        opcion.value = categoria;
        opcion.textContent = categoria;
        categoriaSelect.appendChild(opcion);
    });
}

/* -------------------------
   MOSTRAR PRODUCTOS
------------------------- */
function mostrarProductos() {

    let lista = [...productos];

    const textoBusqueda = document.getElementById("buscar").value.toLowerCase();

    if (textoBusqueda) {
        lista = lista.filter(p =>
            p.titulo.toLowerCase().includes(textoBusqueda)
        );
    }

    if (categoriaSelect.value) {
        lista = lista.filter(p =>
            p.categoria.includes(categoriaSelect.value)
        );
    }

    if (soloOfertas) {
        lista = lista.filter(p =>
            p.precioActual < p.precioAnterior
        );
    }

    const orden = document.getElementById("ordenPrecio").value;

    if (orden === "asc") {
        lista.sort((a, b) => a.precioActual - b.precioActual);
    }

    if (orden === "desc") {
        lista.sort((a, b) => b.precioActual - a.precioActual);
    }

    catalogo.innerHTML = "";

    lista.forEach(producto => {

        const tieneOferta = producto.precioActual < producto.precioAnterior;
        const vendido = producto.estado === "v";

        const descuento = tieneOferta
            ? Math.round((1 - producto.precioActual / producto.precioAnterior) * 100)
            : 0;

        catalogo.innerHTML += `
        <div class="producto ${vendido ? 'vendido' : ''}"
             onclick="abrirProducto(${producto.id})">

            <div class="img-wrapper">

                ${vendido ? `<img src="vendido.png" class="estado-vendido">` : ""}

                ${tieneOferta ? `<img src="oferta.png" class="sello-oferta">` : ""}

                <img class="producto-img"
                     src="${producto.imagenes[0]}"
                     data-img1="${producto.imagenes[0]}"
                     data-img2="${producto.imagenes[1]}"
                     data-img3="${producto.imagenes[2]}">

            </div>

            <div class="puntos">
                <span class="punto activo"></span>
                <span class="punto"></span>
                <span class="punto"></span>
            </div>

            <div class="info">

                <h3>${producto.titulo}</h3>

                <p><strong>${producto.categoria.join(" / ")}</strong></p>

                <p>${producto.descripcion}</p>

                <p>
                    ${producto.dimensiones.altura} ×
                    ${producto.dimensiones.ancho} ×
                    ${producto.dimensiones.fondo}
                </p>

                ${
                    tieneOferta
                    ? `
                    <p class="precio-anterior">${formatoPrecio(producto.precioAnterior)}</p>
                    <p class="precio-actual">${formatoPrecio(producto.precioActual)}</p>
                    <span class="oferta">-${descuento}%</span>
                    `
                    : `<p class="precio-actual">${formatoPrecio(producto.precioActual)}</p>`
                }

            </div>

            <div class="id-producto">#${producto.id}</div>

        </div>`;
    });

    activarPreviewImagenes();
}

/* -------------------------
   PREVIEW + SWIPE PRODUCTOS
------------------------- */
function activarPreviewImagenes() {

    document.querySelectorAll(".producto").forEach(producto => {

        if (producto.classList.contains("vendido")) return;

        const img = producto.querySelector(".producto-img");
        const puntos = producto.querySelectorAll(".punto");

        let imgIndex = 0;

        const images = [
            img.dataset.img1,
            img.dataset.img2,
            img.dataset.img3
        ];

        function cambiar(i) {

            imgIndex = i;

            puntos.forEach(p => p.classList.remove("activo"));
            puntos[imgIndex].classList.add("activo");

            img.style.opacity = 0;

            setTimeout(() => {
                img.src = images[imgIndex];
                img.style.opacity = 1;
            }, 80);
        }

        /* MOUSE DESKTOP */
        producto.addEventListener("mousemove", (e) => {

        const rect = producto.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;

        let nuevoIndex;

        if (x < 0.33) {
            nuevoIndex = 0;
        } else if (x < 0.66) {
            nuevoIndex = 1;
        } else {
            nuevoIndex = 2;
        }

        // 🔥 IMPORTANTE: solo cambia si es distinto
        if (nuevoIndex !== imgIndex) {
            cambiar(nuevoIndex);
        }

    });

        producto.addEventListener("mouseleave", () => {
            cambiar(0);
        });

        /* TOUCH MOBILE SWIPE */
        let startX = 0;

        producto.addEventListener("touchstart", (e) => {
            startX = e.changedTouches[0].screenX;
        }, { passive: true });

        producto.addEventListener("touchend", (e) => {

            let endX = e.changedTouches[0].screenX;
            let diff = startX - endX;

            if (Math.abs(diff) < 40) return;

            if (diff > 0 && imgIndex < 2) cambiar(imgIndex + 1);
            if (diff < 0 && imgIndex > 0) cambiar(imgIndex - 1);

        }, { passive: true });

    });
}

/* -------------------------
   ABRIR MODAL
------------------------- */
function abrirProducto(id) {

    const producto = productos.find(p => p.id === id);

    imagenesActuales = producto.imagenes;
    indice = 0;

    modalImg.src = imagenesActuales[indice];

    document.getElementById("modal").style.display = "flex";

    setTimeout(() => {
        actualizarPuntosModal();
    }, 10);
}

/* -------------------------
   BOTONES MODAL
------------------------- */
document.getElementById("prev").addEventListener("click", () => {

    indice = (indice - 1 + imagenesActuales.length) % imagenesActuales.length;
    modalImg.src = imagenesActuales[indice];

    actualizarPuntosModal(); // 👈

});

document.getElementById("next").addEventListener("click", () => {

    indice = (indice + 1) % imagenesActuales.length;
    modalImg.src = imagenesActuales[indice];

    actualizarPuntosModal(); // 👈

});

/* -------------------------
   SWIPE MODAL (MÓVIL)
------------------------- */
let startX = 0;

modalImg.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].screenX;
}, { passive: true });

modalImg.addEventListener("touchend", (e) => {

    let endX = e.changedTouches[0].screenX;
    let diff = startX - endX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
        indice = (indice + 1) % imagenesActuales.length;
    } else {
        indice = (indice - 1 + imagenesActuales.length) % imagenesActuales.length;
    }

    modalImg.src = imagenesActuales[indice];

    actualizarPuntosModal(); 

});

/* -------------------------
   MODALES
------------------------- */
document.querySelector("#modal .close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("modal").addEventListener("click", (e) => {
    if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
});

/* -------------------------
   MAPA
------------------------- */
const btnMapa = document.getElementById("btnMapa");
const modalMapa = document.getElementById("modalMapa");
const cerrarMapa = document.getElementById("cerrarMapa");

if (btnMapa && modalMapa && cerrarMapa) {

    btnMapa.addEventListener("click", (e) => {
        e.preventDefault();
        modalMapa.style.display = "flex";
    });

    cerrarMapa.addEventListener("click", () => {
        modalMapa.style.display = "none";
    });

    modalMapa.addEventListener("click", (e) => {
        if (e.target === modalMapa) {
            modalMapa.style.display = "none";
        }
    });
}

/* -------------------------
   FILTROS
------------------------- */
document.getElementById("btnOfertas").addEventListener("click", () => {
    soloOfertas = !soloOfertas;
    document.getElementById("btnOfertas").classList.toggle("activo");
    mostrarProductos();
});

document.getElementById("buscar").addEventListener("input", mostrarProductos);
document.getElementById("ordenPrecio").addEventListener("change", mostrarProductos);
categoriaSelect.addEventListener("change", mostrarProductos);

/* -------------------------
   INIT
------------------------- */
cargarCategorias();
mostrarProductos();