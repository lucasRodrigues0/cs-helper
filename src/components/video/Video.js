import './style.css';

export const Video = ({video}) => {
  return (
    <div className="video">
      <video width={'350px'} height={'200px'} controls>
        <source src={video.url} type="video/mp4"/>
        Sorry, your browser doesn't support videos.
      </video>
      <p>Título: {video.titulo}</p>
      <p>Mapa: {video.mapa}</p>
      <p>Categoria: {video.categoria}</p>
    </div>
  )
}