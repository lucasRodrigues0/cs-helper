import './style.css'

export const Filtro = ({onClickSelectMapa, onClickSelectLado}) => {
  return (
    <div className="filtro">
      <label>
        Selecione o mapa
        <select onChange={onClickSelectMapa}>
          <option>Todos</option>
          <option>Mirage</option>
          <option>Overpass</option>
          <option>Vertigo</option>
          <option>Inferno</option>
          <option>Ancient</option>
          <option>Anubis</option>
          <option>Nuke</option>
        </select>
      </label>
      <label>
        Selecione o Lado
        <select onChange={onClickSelectLado}>
          <option>Todos</option>
          <option>CT</option>
          <option>T</option>
        </select>
      </label>
    </div>
  )
}