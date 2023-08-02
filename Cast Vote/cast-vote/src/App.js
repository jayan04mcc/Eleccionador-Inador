import React,{useState} from "react";
import './App.css';
const App = () => {

  // Candidatos, las divisiones representan que pertenecen
  // a listas de selección distintas
  //NOTA: ESTOS CASOS DE PRUEBA SON PARA LA CORRIDA SIN
  //CONEXIÓN A LA BASE DE DATOS, CAMBIARSE EL ACCESO
  //UNA VEZ SE ADJUNTEN LOS ARCHIVOS DE CONEXIÓN
  const grupos = [
    ['Daniel Carrion', 'Osa Jeriz', 'Carolina Wild'],
    ['Ancolino Torres', 'Banis Romero', 'Cherry Flores'],
    ['Raki Damahura', 'Gomez Gomez', 'Bicro Lamar'],
  ];

  const nombresGrupos = ['Lista 1', 'Lista 2', 'Lista 3'];

  const numGrupos = grupos.length;

  //Total de elementos
  const totalElementos = grupos.reduce
  ((total, grupo) => total + grupo.length, 0);

  //Definir el nombre de cada grupo: 
  //Definir una variable de estado para las opciones a elegir
  const [nomElegidos, setNomElegidos] = useState({});

  //Cambiar de opción
  const realizarCambio = (nomGrupo) => (evento) => {
    setNomElegidos({
      ...nomElegidos,
      [nomGrupo]: evento.target.value,
    });
  };
  return (
    <div>
      {grupos.map((nombres, indiceGrupo) => (
        <div key={indiceGrupo}>
          <h2>{nombresGrupos[indiceGrupo]}</h2>
          {nombres.map((nombre, indice) => (
            <div key={indice}>
              <input
                type="radio"
                id={`${nombresGrupos[indiceGrupo]}-${nombre}`}
                name={nombresGrupos[indiceGrupo]}
                value={nombre}
                checked={nomElegidos[nombresGrupos[indiceGrupo]]
                ===nombre}
                onChange={realizarCambio(nombresGrupos[indiceGrupo])}
              />
              <label htmlFor={
              `${nombresGrupos[indiceGrupo]}-${nombre}`}>{nombre}
              </label>
            </div>
          ))}
        </div>
      ))}
      <pre>Nombres elegidos: {JSON.stringify(nomElegidos,null,2)}</pre>
      <p>Numero de selecciones disponibles: {numGrupos}</p>
      <p>Total de elementos: {totalElementos}</p>
    </div>
  );
};

export default App;