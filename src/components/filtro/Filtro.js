import './style.css'
import {MAPA, LADO, CATEGORIA} from '../../utils/constants';
import {useState} from 'react';

export const Filtro = ({onClickSelectMapa, onClickSelectLado, onClickSelectCategoria, filtroMapa, filtroLado, filtroCategoria}) => {

  const [filtroIsActive, setIsActive] = useState(false);
  const [mapaIsActive, setMapaIsActive] = useState(false);
  const [ladoIsActive, setLadoIsActive] = useState(false);
  const [categoriaIsActive, setCategoriaIsActive] = useState(false);

  const toggleFiltro = () => {
    setIsActive(!filtroIsActive);
  }

  const toggleFiltroMapa = (e) => {
    setMapaIsActive(!mapaIsActive);
  }

  const toggleFiltroLado = () => {
    setLadoIsActive(!ladoIsActive);
  }

  const toggleFiltroCategoria = () => {
    setCategoriaIsActive(!categoriaIsActive);
  }

  return (
    <div className="filtro">
      <div className="filtro-toggle-display-button">
        <a className="icon" onClick={toggleFiltro}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className={`filtro-container ${filtroIsActive ? 'active' : ''}`}>
        <div className='filtro-close'>
          <a onClick={toggleFiltro}>
            Ocultar Filtro
          </a>
        </div>
        <div className="filtro-option">
          <button onClick={toggleFiltroMapa}>
            Mapa
          </button>
          <div className={`option-container ${mapaIsActive ? 'active' : ''}`}>
            {
              MAPA.map((mapa) => 
              <div key={mapa} value={mapa} id={mapa} className={`option ${filtroMapa === mapa ? 'selected' : ''}`} onClick={onClickSelectMapa}>
                <a value={mapa} id={mapa}>{mapa}</a>
              </div>
              )
            }
          </div>
        </div>
        <div className="filtro-option">
          <button onClick={toggleFiltroLado}>
            Lado
          </button>
          <div className={`option-container ${ladoIsActive ? 'active' : ''}`}>
            {
              LADO.map((lado) => 
              <div key={lado} value={lado} id={lado} className={`option ${filtroLado === lado ? 'selected' : ''}`} onClick={onClickSelectLado}>
                <a value={lado} id={lado}>{lado}</a>
              </div>
              )
            }
          </div>
        </div>
        <div className="filtro-option">
          <button onClick={toggleFiltroCategoria}>
            Categoria
          </button>
          <div className={`option-container ${categoriaIsActive ? 'active' : ''}`}>
            {
              CATEGORIA.map((categoria) => 
              <div key={categoria} value={categoria} id={categoria} className={`option ${filtroCategoria === categoria ? 'selected' : ''}`} onClick={onClickSelectCategoria}>
                <a value={categoria} id={categoria}>{categoria}</a>
              </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}