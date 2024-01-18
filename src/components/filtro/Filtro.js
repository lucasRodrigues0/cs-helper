import './style.css'

export const Filtro = ({onClickSelectMapa}) => {
  return (
    <div className="filtro">
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
    </div>
  )
}