import './App.css';
import { Galeria } from './components/galeria';
import { videosMock } from './mocks/videos';
import { Filtro } from './components/filtro';
import { useEffect, useState } from 'react';

function App() {

  const [galeria, setGaleria] = useState(videosMock);
  const [filtroMapa, setFiltroMapa] = useState("Todos");
  const [filtroLado, setFiltroLado] = useState("Todos");

  const aplicarFiltros = () => {
    let galeriaFiltrada = [...videosMock.videos];

    if(filtroMapa !== "Todos") {
      galeriaFiltrada = galeriaFiltrada.filter((video) => video.mapa === filtroMapa);
    }

    if(filtroLado !== "Todos") {
      galeriaFiltrada = galeriaFiltrada.filter((video) => video.lado === filtroLado);
    }
    
    setGaleria({
      ...galeria,
      videos: galeriaFiltrada
    })

  }

  const onClickSelectMapa = (event) => {

    const mapa = event.target.value;

    setFiltroMapa(mapa);
  }

  const onClickSelectLado = (event) => {
    const lado = event.target.value;
    
    setFiltroLado(lado);

  }

  useEffect(() => {
    aplicarFiltros();
  }, [filtroMapa, filtroLado]);

  useEffect(() => {
    setGaleria({...videosMock});
  }, []);

  return (
    <div className='container'>
      <div className="App">
        <Filtro onClickSelectMapa={onClickSelectMapa} onClickSelectLado={onClickSelectLado}/>
        <Galeria galeria={galeria} />      
      </div>
    </div>
  );
}

export default App;
