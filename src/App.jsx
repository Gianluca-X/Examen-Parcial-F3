import {useState} from 'react'
import './App.css'
import Card from './components/Card'
const validateModelo = (modelo) => {
  const withoutSpaces = modelo.trim();
  console.log(withoutSpaces);
  if (withoutSpaces.length >= 6)  {
    return true;
  } else {
    return false;
  }
 };
 
const validateMarca = (marca) => {
  if (marca.length >= 3 && marca[0] !== " ") {
    return true;
  } else {
    return false;
  }
 };
 
function App({}) {
  const[marca, setMarca] = useState('');
  const[modelo, setModelo] = useState('');
  const [error, setError] = useState(null)
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!validateMarca(marca) || !validateModelo(modelo)){
        setError(false);
    }else{
       setError(true);
    }
    
  }

  return (
    <>
      <div className='App'>
        <h1>Ingreso de Automoviles</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" name="Ingrese la Marca" placeholder='Marca' value={marca}
            onChange={e=>setMarca(e.target.value)}/>
          <input type="text" name="Ingrese el Modelo" placeholder='Modelo'value={modelo}
          onChange={e=>setModelo(e.target.value)}/>
          <button type="submit" >Añadir</button>
        </form>
        {error ? <Card marca={marca} modelo={modelo}/> : <h4 className='error'>Por favor chequea que la información sea correcta</h4>}
      </div>
    </>
  )
}

export default App
