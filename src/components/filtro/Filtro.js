import './style.css'
import {MAPA, LADO} from '../../utils/constants';

export const Filtro = ({onClickSelectMapa, onClickSelectLado}) => {
  return (
    <div className="filtro">
      <label>
        Selecione o mapa
        <select onChange={onClickSelectMapa}>
           {
             MAPA.map((mapa) => 
             <option key={mapa} value={mapa}>{mapa}</option>
            )
           }
        </select>
      </label>
      <label>
        Selecione o Lado
        <select onChange={onClickSelectLado}>
        {
             LADO.map((lado) => 
             <option key={lado} value={lado}>{lado}</option>
            )
        }
        </select>
      </label>
    </div>
  )
}