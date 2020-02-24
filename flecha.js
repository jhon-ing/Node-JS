/*function sumar(a, b){
    return a + b ;
}

console.log(sumar(2,5));
*/

//let sumar = (a,b) => a + b;

//console.log(sumar(4,6));

//Ejercicio convertir a funcion Flecha
// function saludar(){
//     return 'Hola mundo';
// }

//console.log(saludar());
 

//solucion

//let saludar = (nombre) =>  `Hola ${nombre}`;

//console.log(saludar('Jhon Fernando'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Wiston',
    poder: 'Regeneración',
    getNombre (){
        return `Nombre: ${this.nombre}, ${this.apellido} - poder: ${this.poder}`
    }
};

console.log(deadpool.getNombre());

