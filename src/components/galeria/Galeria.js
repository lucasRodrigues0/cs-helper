import { Video } from './video';
import './style.css'

export const Galeria = ({galeria}) => {
  return (
      <div className='galeria'>
        {
            galeria && galeria.videos ? (
              galeria.videos.map((video) => (
                <Video key={video.id} video={video} />
              ))
            ) : (
              <p>Nenhum vídeo disponível.</p>
            )
        }
      </div>
  );
}