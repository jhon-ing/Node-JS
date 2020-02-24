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
  
  
  const getInformacion = async(id) =>{
      let empleado = await getEmpleado(id)
      let resp = await getSalario(empleado)

      return `${resp.nombre} tiene un salario de ${resp.salario} $`;
  }

  getInformacion(10)
  .then(mensaje => console.log(mensaje))
  .catch(err => console.log(err));