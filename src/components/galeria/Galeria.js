import { Video } from './video';
import './style.css'

export const Galeria = ({galeria}) => {
  return (
      <div className='galeria'>
        {
          galeria.videos.map((video) => {
            return (
              <Video key={video.id} video={video}/>
            )
          })
        }
      </div>
  )
}