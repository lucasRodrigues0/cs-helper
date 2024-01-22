import './style.css';
import { YoutubeEmbed } from './youtube-embed';

export const Video = ({video}) => {
  return (
    <div className="video">
      <YoutubeEmbed embedId={video.embedId}/>
      <p>Título: {video.titulo}</p>
      <p>Mapa: {video.mapa}</p>
      <p>Categoria: {video.categoria}</p>
      <p>Lado: {video.lado}</p>
      <p>Botão do mouse: {video.mouse}</p>
    </div>
  )
}