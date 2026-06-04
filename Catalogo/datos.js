const productos = [
{
    id: 1,
    estado: "d",
    imagenes: [
        "https://imgfz.com/i/1vJ3qo0.jpg",
        "https://imgfz.com/i/cmJjRQT.jpg",
        "https://imgfz.com/i/sljD4X2.jpg"
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
        "http://imgfz.com/i/b8RGtXL.png",
        "http://imgfz.com/i/jmVyuCc.png",
        "http://imgfz.com/i/aHFqoEG.png"
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
        "http://imgfz.com/i/ynDdtYN.jpeg",
        "http://imgfz.com/i/mo5Aurh.jpeg",
        "http://imgfz.com/i/sfbR0ak.jpeg"
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
        "http://imgfz.com/i/TIKPDEV.jpeg",
        "http://imgfz.com/i/NmL2uge.jpeg",
        "http://imgfz.com/i/FjYuGbB.jpeg"
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
        "http://imgfz.com/i/rh8nFYX.jpeg",
        "http://imgfz.com/i/Dibs65K.jpeg",
        "http://imgfz.com/i/YGjt90f.jpeg"
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
        "http://imgfz.com/i/WDXLiSK.jpeg",
        "http://imgfz.com/i/3kBx1zp.jpeg",
        "http://imgfz.com/i/DcMPnxs.jpeg"
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
        "http://imgfz.com/i/pnWsGV5.jpeg",
        "http://imgfz.com/i/IM6VBKC.jpeg",
        "http://imgfz.com/i/JsdeQR6.jpeg"
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
        "http://imgfz.com/i/Uq0d2EZ.jpeg",
        "http://imgfz.com/i/YTK5hfA.jpeg",
        "http://imgfz.com/i/iZaeqor.jpeg"
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
        "http://imgfz.com/i/57hcug8.jpeg",
        "http://imgfz.com/i/7sUCwLT.jpeg",
        "http://imgfz.com/i/l3hT1VC.jpeg"
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
        "http://imgfz.com/i/6C2ZRUt.jpeg",
        "http://imgfz.com/i/a1XBqpL.jpeg",
        "http://imgfz.com/i/W01EsBm.jpeg"
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
        "http://imgfz.com/i/sFLbgqT.jpeg",
        "http://imgfz.com/i/aynYSQh.jpeg",
        "http://imgfz.com/i/t3cjpHu.jpeg"
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
        "http://imgfz.com/i/PAH2tNS.jpeg",
        "http://imgfz.com/i/zIrlnuE.jpeg",
        "http://imgfz.com/i/juPC0Ka.jpeg"
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
        "http://imgfz.com/i/YqjpU1Z.jpeg",
        "http://imgfz.com/i/jI8eGUl.jpeg",
        "http://imgfz.com/i/EzbUjrF.jpeg"
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
        "http://imgfz.com/i/qa0bpMx.jpeg",
        "http://imgfz.com/i/PaW7szc.jpeg",
        "http://imgfz.com/i/CEGdMA8.jpeg"
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
        "http://imgfz.com/i/USYvOZP.jpeg",
        "http://imgfz.com/i/Z7Il3cn.jpeg",
        "http://imgfz.com/i/lEXBmSb.jpeg"
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
        "http://imgfz.com/i/a26oIJb.jpeg",
        "http://imgfz.com/i/vlFIRzh.jpeg",
        "http://imgfz.com/i/w25VH3k.jpeg"
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
        "http://imgfz.com/i/ZfzeCnP.jpeg",
        "http://imgfz.com/i/Bk4Jb13.jpeg",
        "http://imgfz.com/i/92ERFvg.jpeg"
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
        "http://imgfz.com/i/6aTE0hx.jpeg",
        "http://imgfz.com/i/jb1PUXt.jpeg",
        "http://imgfz.com/i/0zX4NKV.jpeg"
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
        "http://imgfz.com/i/5PzEMGl.jpeg",
        "http://imgfz.com/i/oOQZnV6.jpeg",
        "http://imgfz.com/i/s1EwSI6.jpeg"
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
        "http://imgfz.com/i/NgP43W5.jpeg",
        "http://imgfz.com/i/h0g4RaQ.jpeg",
        "http://imgfz.com/i/l5Z0yJR.jpeg"
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
        "http://imgfz.com/i/AIe0qWr.jpeg",
        "http://imgfz.com/i/kO4opW7.jpeg",
        "http://imgfz.com/i/X45eI8s.jpeg"
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
        "http://imgfz.com/i/pUHf2VW.jpeg",
        "http://imgfz.com/i/IrKngbB.jpeg",
        "http://imgfz.com/i/Zn4QUsp.jpeg"
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
        "http://imgfz.com/i/hDvCTfN.jpeg",
        "http://imgfz.com/i/xWusv8i.jpeg",
        "http://imgfz.com/i/eorFnJN.jpeg"
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
        "http://imgfz.com/i/bBqGhzF.jpeg",
        "http://imgfz.com/i/TDE5QkR.jpeg",
        "http://imgfz.com/i/rNPs5eR.jpeg"
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
        "http://imgfz.com/i/vkRVKBi.jpeg",
        "http://imgfz.com/i/MEpUJuz.jpeg",
        "http://imgfz.com/i/cYDGed6.jpeg"
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
        "http://imgfz.com/i/sJxgO6Q.jpeg",
        "http://imgfz.com/i/sPGKAi4.jpeg",
        "http://imgfz.com/i/TFsMrwn.jpeg"
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
        "http://imgfz.com/i/0rYix8g.jpeg",
        "http://imgfz.com/i/KqgDSAE.jpeg",
        "http://imgfz.com/i/gq8YwCu.jpeg"
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
        "http://imgfz.com/i/vZV1dYX.jpeg",
        "http://imgfz.com/i/ckBi2D0.jpeg",
        "http://imgfz.com/i/SE6Rt07.jpeg"
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
        "http://imgfz.com/i/wvJe7Nh.jpeg",
        "http://imgfz.com/i/6CcyABp.jpeg",
        "http://imgfz.com/i/6JK3LrN.jpeg"
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
        "http://imgfz.com/i/vibOICx.jpeg",
        "http://imgfz.com/i/orBNa1V.jpeg",
        "http://imgfz.com/i/sUGIgQN.jpeg"
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
        "http://imgfz.com/i/zDLFt16.jpeg",
        "http://imgfz.com/i/YxV2q9B.jpeg",
        "http://imgfz.com/i/BwHxpnY.jpeg"
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
        "http://imgfz.com/i/Tbgj7UF.jpeg",
        "http://imgfz.com/i/qcEjlJy.jpeg",
        "http://imgfz.com/i/3EPK9mL.jpeg"
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
        "http://imgfz.com/i/RNAWEx4.jpeg",
        "http://imgfz.com/i/4U9ElC5.jpeg",
        "http://imgfz.com/i/3EPK9mL.jpeg"
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
