import './App.css';
import { Galeria } from './components/galeria';
import { videosMock } from './mocks/videos';
import { Filtro} from './components/filtro'

function App() {
  return (
    <div className='container'>
      <div className="App">
        <Filtro />
        <Galeria galeria={videosMock} />      
      </div>
    </div>
  );
}

export default App;
