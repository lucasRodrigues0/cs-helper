import './style.css'
import {MAPA, LADO, CATEGORIA} from '../../utils/constants';
import {useState} from 'react';

export const Filtro = ({onClickSelectMapa, onClickSelectLado, onClickSelectCategoria}) => {

  const [isActive, setIsActive] = useState(false);

  const toggleFiltro = () => {
    setIsActive(!isActive);
  }

  const toggleOptions = (e) => {
    console.log(e.target.textContent);
  }

  return (
    <div className="filtro">
      <div className="filtro-toggle-display-button">
        <a className="icon" onClick={toggleFiltro}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className={`filtro-container ${isActive ? 'active' : ''}`}>
        <div className='filtro-close'>
          <a onClick={toggleFiltro}>
            Ocultar Filtro
          </a>
        </div>
        <div className="filtro-option">
          <button onClick={toggleOptions}>
            Mapa
          </button>
          <div className="option-container">
            {
              MAPA.map((mapa) => 
              <div key={mapa} value={mapa} id={mapa} className="option">
                <a value={mapa} id={mapa} onClick={onClickSelectMapa}>{mapa}</a>
              </div>
              )
            }
          </div>
        </div>
        <div className="filtro-option">
          <button onClick={toggleOptions}>
            Lado
          </button>
          <div className="option-container">
            {
              LADO.map((lado) => 
              <div key={lado} value={lado} id={lado} className="option">
                <a value={lado} id={lado} onClick={onClickSelectLado}>{lado}</a>
              </div>
              )
            }
          </div>
        </div>
        <div className="filtro-option">
          <button onClick={toggleOptions}>
            Categoria
          </button>
          <div className="option-container">
            {
              CATEGORIA.map((categoria) => 
              <div key={categoria} value={categoria} id={categoria} className="option">
                <a value={categoria} id={categoria} onClick={onClickSelectCategoria}>{categoria}</a>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}