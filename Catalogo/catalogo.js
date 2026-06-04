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
    .forEach(producto=>{

        if (producto.classList.contains("vendido")) return;

        const img=producto.querySelector(".producto-img");
        const puntos=producto.querySelectorAll(".punto");

        producto.addEventListener("mousemove",(e)=>{

            const rect=producto.getBoundingClientRect();
            const pos=e.clientX-rect.left;
            const porcentaje=pos/rect.width;

            let nuevaImagen;
            let indicePunto;

            if(porcentaje<0.33){

                nuevaImagen=img.dataset.img1;
                indicePunto=0;

            }else if(porcentaje<0.66){

                nuevaImagen=img.dataset.img2;
                indicePunto=1;

            }else{

                nuevaImagen=img.dataset.img3;
                indicePunto=2;

            }

            puntos.forEach(p=>p.classList.remove("activo"));
            puntos[indicePunto].classList.add("activo");

            if(img.src!==nuevaImagen){

                img.style.opacity=0;

                setTimeout(()=>{

                    img.src=nuevaImagen;
                    img.style.opacity=1;

                },80);

            }

        });

        producto.addEventListener("mouseleave",()=>{

            img.src=img.dataset.img1;

            puntos.forEach(p=>p.classList.remove("activo"));
            puntos[0].classList.add("activo");

        });

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

document
    .querySelector(".close")
    .addEventListener("click", () => {

        document
            .getElementById("modal")
            .style.display =
            "none";

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

cargarCategorias();
mostrarProductos();

