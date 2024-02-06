import './style.css'
import {MAPA, LADO, CATEGORIA} from '../../utils/constants';
import {useState} from 'react';

export const Filtro = ({onClickSelectMapa, onClickSelectLado, onClickSelectCategoria}) => {

  const [isActive, setIsActive] = useState(false);

  const toggleFiltro = () => {
    setIsActive(!isActive);
  }
  
  /* const controlScreenSize = () => {
    if(window.innerWidth > 865) {
      setIsActive(false);
    }
  }

  useEffect = (() => {
    controlScreenSize();
  }, []); */

  return (
    <div className="filtro">
      <div className="filtro-button">
        <a className="icon" onClick={toggleFiltro}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className={`filtro-container ${isActive ? 'active' : ''}`}>
        <div className='filtro-close'>
          <a onClick={toggleFiltro}>
            X
          </a>
        </div>
        <label>
          Mapa:
          <select onChange={onClickSelectMapa}>
            {
              MAPA.map((mapa) => 
              <option key={mapa} value={mapa} id={mapa}>{mapa}</option>
              )
            }
          </select>
        </label>
        <label>
          Lado:
          <select onChange={onClickSelectLado}>
          {
              LADO.map((lado) => 
              <option key={lado} value={lado} id={lado}>{lado}</option>
              )
          }
          </select>
        </label>
        <label>
          Categoria:
          <select onChange={onClickSelectCategoria}>
            {
                CATEGORIA.map((categoria) => 
                <option key={categoria} value={categoria} id={categoria}>{categoria}</option>
              )
            }
          </select>
        </label>
      </div>
    </div>
  )
}