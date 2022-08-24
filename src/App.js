import personas from './data/personas.json';
const App = ()=> {
  return (
    <div className="App">
        <p>desafio1</p>
        <hr></hr>
        {personas.map( persona => (
          <div> 
            <p> Nombre:{persona.nombre}</p>
            <p> Edad:{persona.edad}</p>
            <hr></hr>
          </div>
        ))
        }
    </div>
  );
}

export default App;
 