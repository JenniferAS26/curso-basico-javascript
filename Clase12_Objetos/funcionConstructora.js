function auto(marca, modelo, annio) { //tengo mi funcion que recibe estos parametros
    this.marca = marca; // empiezo a generar el template, utilizo this como referencia a mi funcion constructora
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020); // va a generar una nueva instancia, es un objeto que deriva de otro objeto
var autoNuevo2 = new auto("Toyota", "Corolla", 2010);
var autoNuevo3 = new auto("Susuki", "Vitara", 2015);
var autoNuevo4 = new auto("Mazda", "CX-5", 2022);
var autoNuevo5 = new auto("Ford", "Escape", 2013);
var autoNuevo6 = new auto("Renault", "Coleos", 2019);
var autoNuevo7 = new auto("Chevrolet", "Tracker", 2018);
var autoNuevo8 = new auto("Nissan", "Kicks", 2020);
var autoNuevo9 = new auto("Kia", "Picanto", 2011);
var autoNuevo10 = new auto("Subaru", "XV", 2020);