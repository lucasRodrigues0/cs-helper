import './App.css';
import { Galeria } from './components/galeria';
import { videosMock } from './mocks/videos';
import { Filtro} from './components/filtro';
import { useEffect, useState } from 'react';

function App() {

  const [galeria, setGaleria] = useState(videosMock);
  const [galeriaOriginal, setGaleriaOriginal] = useState(videosMock);

  const onClickSelectMapa = (event) => {

    const mapa = event.target.value;

    if (mapa === "" || mapa === "Todos") {

      setGaleria(galeriaOriginal);

    } else {

      const filtrado = galeriaOriginal.videos.filter((video) => video.mapa === mapa); 

      setGaleria({
        ...galeria,
        videos: filtrado
      })
    }   

  }

  useEffect(() => {
    setGaleriaOriginal(videosMock);
  }, []);

  return (
    <div className='container'>
      <div className="App">
        <Filtro onClickSelectMapa={onClickSelectMapa}/>
        <Galeria galeria={galeria} />      
      </div>
    </div>
  );
}

export default App;
