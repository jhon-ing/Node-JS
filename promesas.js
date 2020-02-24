let empleados = [
  {
    id: 1,
    nombre: "Jhon"
  },
  {
    id: 2,
    nombre: "Juan"
  },
  {
    id: 3,
    nombre: "Adriana"
  }
];

let salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 3000
  }
];

const getEmpleado = id => {
  return new Promise((resolve, reject) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    if (!empleadoDB) {
      reject(`No existe un empleado con el id ${id}`);
    } else {
      resolve(empleadoDB);
    }
  });
}

const getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id)
    if (!salarioDB) {
        reject(`No existe un salario para el empleado ${empleado.nombre}`);
    }else{
        resolve({
            nombre: empleado.nombre,
            salario: salarioDB.salario,
            id: empleado.id
        });
    }
    });
}

getEmpleado(3).then( empleado =>{
    //console.log('Empleado de BD', empleado);
    
    return getSalario (empleado);
})
.then(resp => {
    console.log(`El salario de ${resp.nombre} es de ${ resp.salario} $`);
})
.catch( err => {
    console.log(err);
});
