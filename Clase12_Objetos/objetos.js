/* Un objeto tiene propiedades
        Propiedades -> son una combinacion entre palabras CLAVE y VALORES
*/

// Como escribo un objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function name(params) { // podemos generar una de las propiedades como una funcion
        console.log(`Auto: ${this.modelo} ${this.annio}`);
    }
};

// como acceder a algo en especifico
miAuto.marca;
miAuto.detalleDelAuto();

