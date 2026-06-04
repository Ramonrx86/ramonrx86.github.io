const catalogo = document.getElementById("catalogo");
const categoriaSelect = document.getElementById("categoria");

let soloOfertas = false;
let imagenesActuales = [];
let indice = 0;

function formatoPrecio(n) {
    return "$" + Number(n).toLocaleString("es-CL");
}

function cargarCategorias() {

    const categorias = [
        ...new Set(
            productos.flatMap(p => p.categoria)
        )
    ];

    categorias.forEach(categoria => {

        const opcion = document.createElement("option");

        opcion.value = categoria;
        opcion.textContent = categoria;

        categoriaSelect.appendChild(opcion);

    });

}

function mostrarProductos() {

    let lista = [...productos];

    const textoBusqueda =
        document
        .getElementById("buscar")
        .value
        .toLowerCase();

    if (textoBusqueda) {

        lista = lista.filter(producto =>
            producto.titulo
                .toLowerCase()
                .includes(textoBusqueda)
        );

    }

    if (categoriaSelect.value) {

        lista = lista.filter(
            producto =>
                producto.categoria.includes(categoriaSelect.value)
        );

    }

    if (soloOfertas) {

        lista = lista.filter(
            producto =>
                producto.precioActual < producto.precioAnterior
        );

    }

    const orden =
        document
        .getElementById("ordenPrecio")
        .value;

    if (orden === "asc") {

        lista.sort(
            (a, b) =>
                a.precioActual - b.precioActual
        );

    }

    if (orden === "desc") {

        lista.sort(
            (a, b) =>
                b.precioActual - a.precioActual
        );

    }

    catalogo.innerHTML = "";

        lista.forEach(producto => {

        const tieneOferta =
            producto.precioActual <
            producto.precioAnterior;

        const vendido = producto.estado === "v";

        const descuento = tieneOferta
            ? Math.round(
                (1 - producto.precioActual / producto.precioAnterior) * 100
            )
            : 0;

        catalogo.innerHTML += `
            <div
                class="producto ${vendido ? 'vendido' : ''}"
                onclick="abrirProducto(${producto.id})">

                <div class="img-wrapper">

                    ${
                        vendido
                        ? `<img src="vendido.png" class="estado-vendido" alt="Vendido">`
                        : ""
                    }

                    ${
                        tieneOferta
                        ? `<img src="oferta.png" class="sello-oferta" alt="Oferta">`
                        : ""
                    }

                    <img
                        class="producto-img"
                        src="${producto.imagenes[0]}"
                        data-img1="${producto.imagenes[0]}"
                        data-img2="${producto.imagenes[1]}"
                        data-img3="${producto.imagenes[2]}"
                        alt="${producto.titulo}"
                    >

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
                        ${producto.dimensiones.altura}
                        ×
                        ${producto.dimensiones.ancho}
                        ×
                        ${producto.dimensiones.fondo}
                    </p>

                    ${
                        tieneOferta
                        ? `
                            <p class="precio-anterior">
                                ${formatoPrecio(producto.precioAnterior)}
                            </p>

                            <p class="precio-actual">
                                ${formatoPrecio(producto.precioActual)}
                            </p>

                            <span class="oferta">
                                -${descuento}%
                            </span>
                        `
                        : `
                            <p class="precio-actual">
                                ${formatoPrecio(producto.precioActual)}
                            </p>
                        `
                    }

                </div>

                <div class="id-producto">
                    #${producto.id}
                </div>

            </div>
        `;
    });

    activarPreviewImagenes();

}

function activarPreviewImagenes(){

    document.querySelectorAll(".producto")
    .forEach(producto => {

        if (producto.classList.contains("vendido")) return;

        const img = producto.querySelector(".producto-img");
        const puntos = producto.querySelectorAll(".punto");

        let touchStartX = 0;
        let touchEndX = 0;

        let imgIndex = 0;

        const images = [
            img.dataset.img1,
            img.dataset.img2,
            img.dataset.img3
        ];

        function cambiarImagen(nuevoIndex) {

            imgIndex = nuevoIndex;

            puntos.forEach(p => p.classList.remove("activo"));
            puntos[imgIndex].classList.add("activo");

            img.style.opacity = 0;

            setTimeout(() => {
                img.src = images[imgIndex];
                img.style.opacity = 1;
            }, 80);
        }

        // 🖱️ MOUSE (PC)
        producto.addEventListener("mousemove", (e) => {

            const rect = producto.getBoundingClientRect();
            const pos = e.clientX - rect.left;
            const porcentaje = pos / rect.width;

            if (porcentaje < 0.33) {
                if (imgIndex !== 0) cambiarImagen(0);
            } else if (porcentaje < 0.66) {
                if (imgIndex !== 1) cambiarImagen(1);
            } else {
                if (imgIndex !== 2) cambiarImagen(2);
            }

        });

        producto.addEventListener("mouseleave", () => {
            cambiarImagen(0);
        });

        // 📱 TOUCH START
        producto.addEventListener("touchstart", (e) => {

            touchStartX = e.changedTouches[0].screenX;

        }, { passive: true });

        // 📱 TOUCH END (SWIPE)
        producto.addEventListener("touchend", (e) => {

            touchEndX = e.changedTouches[0].screenX;

            const diff = touchStartX - touchEndX;

            if (Math.abs(diff) < 40) return;

            // swipe izquierda → siguiente
            if (diff > 0) {

                if (imgIndex < images.length - 1) {
                    cambiarImagen(imgIndex + 1);
                }

            } else {

                if (imgIndex > 0) {
                    cambiarImagen(imgIndex - 1);
                }

            }

        }, { passive: true });

    });

}

function abrirProducto(id) {

    const producto =
        productos.find(
            p => p.id === id
        );

    imagenesActuales =
        producto.imagenes;

    indice = 0;

    document
        .getElementById("modalImg")
        .src =
        imagenesActuales[0];

    document
        .getElementById("modal")
        .style.display =
        "flex";

}

document
    .getElementById("btnOfertas")
    .addEventListener("click", () => {

        soloOfertas = !soloOfertas;

        document
            .getElementById("btnOfertas")
            .classList
            .toggle("activo");

        mostrarProductos();

    });

document
    .getElementById("buscar")
    .addEventListener(
        "input",
        mostrarProductos
    );

document
    .getElementById("ordenPrecio")
    .addEventListener(
        "change",
        mostrarProductos
    );

categoriaSelect
    .addEventListener(
        "change",
        mostrarProductos
    );

const cerrarImagen =
    document.querySelector("#modal .close");

cerrarImagen.addEventListener("click", () => {

    document
        .getElementById("modal")
        .style.display =
        "none";

});

document
    .getElementById("modal")
    .addEventListener("click", (e) => {

        if (e.target.id === "modal") {

            document
                .getElementById("modal")
                .style.display =
                "none";

        }

    });

document
    .getElementById("prev")
    .addEventListener("click", () => {

        indice =
            (
                indice - 1 +
                imagenesActuales.length
            )
            %
            imagenesActuales.length;

        document
            .getElementById("modalImg")
            .src =
            imagenesActuales[indice];

    });

document
    .getElementById("next")
    .addEventListener("click", () => {

        indice =
            (
                indice + 1
            )
            %
            imagenesActuales.length;

        document
            .getElementById("modalImg")
            .src =
            imagenesActuales[indice];

    });

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

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        document
            .getElementById("modal")
            .style.display =
            "none";

        if (modalMapa) {

            modalMapa.style.display =
                "none";

        }

    }

});

let touchStartX = 0;
let touchEndX = 0;

const modalImg =
    document.getElementById("modalImg");

modalImg.addEventListener(
    "touchstart",
    (e) => {

        touchStartX =
            e.changedTouches[0].screenX;

    },
    { passive: true }
);

modalImg.addEventListener(
    "touchend",
    (e) => {

        touchEndX =
            e.changedTouches[0].screenX;

        manejarSwipe();

    },
    { passive: true }
);

function manejarSwipe() {

    const diferencia =
        touchStartX - touchEndX;

    if (Math.abs(diferencia) < 50) return;

    if (diferencia > 0) {

        indice =
            (
                indice + 1
            )
            %
            imagenesActuales.length;

    } else {

        indice =
            (
                indice - 1 +
                imagenesActuales.length
            )
            %
            imagenesActuales.length;

    }

    modalImg.src =
        imagenesActuales[indice];

}

cargarCategorias();
mostrarProductos();

