import './style.css'
import {MAPA, LADO, CATEGORIA} from '../../utils/constants';

export const Filtro = ({onClickSelectMapa, onClickSelectLado, onClickSelectCategoria}) => {
  return (
    <div className="filtro">
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
  )
}