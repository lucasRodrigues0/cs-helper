import './App.css';
import { Galeria } from './components/galeria';
import { Filtro } from './components/filtro';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [galeria, setGaleria] = useState([{videos: []}]);
  const [galeriaInicial, setGaleriaInicial] = useState([{videos: []}]);
  const [filtroMapa, setFiltroMapa] = useState("Todos");
  const [filtroLado, setFiltroLado] = useState("Todos");
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");

  const client = axios.create({
    baseURL: "http://localhost:3000"
  });

  const aplicarFiltros = () => {
    let galeriaFiltrada = galeriaInicial.videos;

    if(filtroMapa !== "Todos") {
      galeriaFiltrada = galeriaFiltrada.filter((video) => video.mapa === filtroMapa);
    }

    if(filtroLado !== "Todos") {
      galeriaFiltrada = galeriaFiltrada.filter((video) => video.lado === filtroLado);
    }

    if(filtroCategoria !== "Todos") {
      galeriaFiltrada = galeriaFiltrada.filter((video) => video.categoria === filtroCategoria);
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

  const onClickSelectCategoria = (event) => {

    const categoria = event.target.value;

    setFiltroCategoria(categoria);

  }

  useEffect(() => {
    aplicarFiltros();
  }, [filtroMapa, filtroLado, filtroCategoria]);

  useEffect(() => {
    client.get('/videos').then((response) => {
      setGaleriaInicial(() => ({
        videos: response.data
      }));
    });
  }, []);

  useEffect(() => {
    setGaleria(galeriaInicial);
  }, [galeriaInicial]);

  return (
    <div className='container'>
      <div className="App">
        <Filtro onClickSelectMapa={onClickSelectMapa} onClickSelectLado={onClickSelectLado} onClickSelectCategoria={onClickSelectCategoria}/>
        <Galeria galeria={galeria} />      
      </div>
    </div>
  );
}

export default App;
