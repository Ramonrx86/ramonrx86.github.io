const productos = [
{
    id: 1,
    estado: "d",
    imagenes: [
        "img/1-1.jpg",
        "img/1-2.jpg",
        "img/1-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negra con texturizado",
    dimensiones: {
        altura: "↕️ 24 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 65000,
    precioActual: 45000
},
{
    id: 2,
    estado: "d",
    imagenes: [
        "img/2-1.jpg",
        "img/2-2.jpg",
        "img/2-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negra con rosa electrico",
    dimensiones: {
        altura: "↕️ 24 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 65000,
    precioActual: 45000
},
{
    id: 3,
    estado: "d",
    imagenes: [
        "img/3-1.jpg",
        "img/3-2.jpg",
        "img/3-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negra con estampado floral",
    dimensiones: {
        altura: "↕️ 24 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 65000,
    precioActual: 45000
},
{
    id: 4,
    estado: "d",
    imagenes: [
        "img/4-1.jpg",
        "img/4-2.jpg",
        "img/4-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con animalprint",
    dimensiones: {
        altura: "↕️ 24 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 65000,
    precioActual: 45000
},
{
    id: 5,
    estado: "d",
    imagenes: [
        "img/5-1.jpg",
        "img/5-2.jpg",
        "img/5-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado floral",
    dimensiones: {
        altura: "↕️ 25 cm",
        ancho: "↔️ 34 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 55000
},
{
    id: 6,
    estado: "d",
    imagenes: [
        "img/6-1.jpg",
        "img/6-2.jpg",
        "img/6-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado dorado",
    dimensiones: {
        altura: "↕️ 25 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 68000,
    precioActual: 55000
},
{
    id: 7,
    estado: "v",
    imagenes: [
        "img/7-1.jpg",
        "img/7-2.jpg",
        "img/7-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado rosado metalico",
    dimensiones: {
        altura: "↕️ 25 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 68000,
    precioActual: 55000
},
{
    id: 8,
    estado: "d",
    imagenes: [
        "img/8-1.jpg",
        "img/8-2.jpg",
        "img/8-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado floral",
    dimensiones: {
        altura: "↕️ 25 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 68000,
    precioActual: 55000
},
{
    id: 9,
    estado: "d",
    imagenes: [
        "img/9-1.jpg",
        "img/9-2.jpg",
        "img/9-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero amarillo con animalprint",
    dimensiones: {
        altura: "↕️ 25 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 68000,
    precioActual: 55000
},
{
    id: 10,
    estado: "d",
    imagenes: [
        "img/10-1.jpg",
        "img/10-2.jpg",
        "img/10-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con estampado floral",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 60000
},
{
    id: 11,
    estado: "d",
    imagenes: [
        "img/11-1.jpg",
        "img/11-2.jpg",
        "img/11-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe texturizado",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 60000
},
{
    id: 12,
    estado: "d",
    imagenes: [
        "img/12-1.jpg",
        "img/12-2.jpg",
        "img/12-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado floral",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 60000
},
{
    id: 13,
    estado: "d",
    imagenes: [
        "img/13-1.jpg",
        "img/13-2.jpg",
        "img/13-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero cafe con estampado floral",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 60000
},
{
    id: 14,
    estado: "d",
    imagenes: [
        "img/14-1.jpg",
        "img/14-2.jpg",
        "img/14-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 35 cm",
        fondo: "📦 15 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 72000,
    precioActual: 60000
},
{
    id: 15,
    estado: "d",
    imagenes: [
        "img/15-1.jpg",
        "img/15-2.jpg",
        "img/15-3.jpg"
    ],
    titulo: "Bolso de Cuero",
    descripcion: "Bolso de cuero negro texturizado [correa ajustable 1.26 cm]",
    dimensiones: {
        altura: "↕️ 39 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Bolsos"],
    precioAnterior: 95000,
    precioActual: 60000
},
{
    id: 16,
    estado: "d",
    imagenes: [
        "img/16-1.jpg",
        "img/16-2.jpg",
        "img/16-3.jpg"
    ],
    titulo: "Cartera/Mochila de Cuero",
    descripcion: "Cartera/Mochila de cuero rojo texturizado [correa ajustable]",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 16 cm"
    },
    categoria: ["Carteras", "Mochila"],
    precioAnterior: 69000,
    precioActual: 55000
},
{
    id: 17,
    estado: "d",
    imagenes: [
        "img/17-1.jpg",
        "img/17-2.jpg",
        "img/17-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 69000,
    precioActual: 55000
},
{
    id: 18,
    estado: "d",
    imagenes: [
        "img/18-1.jpg",
        "img/18-2.jpg",
        "img/18-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 69000,
    precioActual: 55000
},
{
    id: 19,
    estado: "d",
    imagenes: [
        "img/19-1.jpg",
        "img/19-2.jpg",
        "img/19-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 69000,
    precioActual: 55000
},
{
    id: 20,
    estado: "d",
    imagenes: [
        "img/20-1.jpg",
        "img/20-2.jpg",
        "img/20-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 25 cm",
        fondo: "📦 14 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 21,
    estado: "d",
    imagenes: [
        "img/21-1.jpg",
        "img/21-2.jpg",
        "img/21-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 25 cm",
        fondo: "📦 14 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 22,
    estado: "d",
    imagenes: [
        "img/22-1.jpg",
        "img/22-2.jpg",
        "img/22-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 25 cm",
        fondo: "📦 14 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 23,
    estado: "d",
    imagenes: [
        "img/23-1.jpg",
        "img/23-2.jpg",
        "img/23-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 25 cm",
        fondo: "📦 14 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 24,
    estado: "d",
    imagenes: [
        "img/24-1.jpg",
        "img/24-2.jpg",
        "img/24-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 28 cm",
        ancho: "↔️ 30 cm",
        fondo: "📦 14 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 25,
    estado: "d",
    imagenes: [
        "img/25-1.jpg",
        "img/25-2.jpg",
        "img/25-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 15 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 50000
},
{
    id: 26,
    estado: "d",
    imagenes: [
        "img/26-1.jpg",
        "img/26-2.jpg",
        "img/26-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 16 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 55000
},
{
    id: 27,
    estado: "d",
    imagenes: [
        "img/27-1.jpg",
        "img/27-2.jpg",
        "img/27-3.jpg"
    ],
    titulo: "Mochila de Cuero",
    descripcion: "Mochila de cuero",
    dimensiones: {
        altura: "↕️ 30 cm",
        ancho: "↔️ 28 cm",
        fondo: "📦 16 cm"
    },
    categoria: ["Mochila"],
    precioAnterior: 65000,
    precioActual: 55000
},
{
    id: 28,
    estado: "d",
    imagenes: [
        "img/28-1.jpg",
        "img/28-2.jpg",
        "img/28-3.jpg"
    ],
    titulo: "Matero de Cuero",
    descripcion: "Matero de cuero",
    dimensiones: {
        altura: "↕️ 34 cm",
        ancho: "↔️ 23 cm",
        fondo: "📦 10 cm"
    },
    categoria: ["Matero"],
    precioAnterior: 72000,
    precioActual: 65000
},
{
    id: 29,
    estado: "d",
    imagenes: [
        "img/29-1.jpg",
        "img/29-2.jpg",
        "img/29-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 28 cm",
        ancho: "↔️ 24 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 49000,
    precioActual: 40000
},
{
    id: 30,
    estado: "d",
    imagenes: [
        "img/30-1.jpg",
        "img/30-2.jpg",
        "img/30-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 28 cm",
        ancho: "↔️ 24 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 49000,
    precioActual: 40000
},
{
    id: 31,
    estado: "d",
    imagenes: [
        "img/31-1.jpg",
        "img/31-2.jpg",
        "img/31-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 28 cm",
        ancho: "↔️ 24 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 49000,
    precioActual: 40000
},
{
    id: 32,
    estado: "d",
    imagenes: [
        "img/32-1.jpg",
        "img/32-2.jpg",
        "img/32-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 28 cm",
        ancho: "↔️ 24 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 49000,
    precioActual: 40000
},
{
    id: 33,
    estado: "d",
    imagenes: [
        "img/33-1.jpg",
        "img/33-2.jpg",
        "img/33-3.jpg"
    ],
    titulo: "Cartera de Cuero",
    descripcion: "Cartera de cuero negro con mostaza",
    dimensiones: {
        altura: "↕️ 23 cm",
        ancho: "↔️ 24 cm",
        fondo: "📦 8 cm"
    },
    categoria: ["Carteras"],
    precioAnterior: 45000,
    precioActual: 38000
}
];