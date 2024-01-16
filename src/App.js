import './App.css';
import { Galeria } from './components/galeria';
import { videosMock } from './mocks/videos';

function App() {
  return (
    <div className="App">
      <Galeria galeria={videosMock} />      
    </div>
  );
}

export default App;
