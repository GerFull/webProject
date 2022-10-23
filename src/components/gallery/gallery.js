import { useState } from 'react';
import style from '../gallery/gallery.module.scss';

function Gallery() {
   const arrIMg = [
      '/images/lavenda.jpg',
      '/images/lavanda3.jpg',
      '/images/lavanda2.jpg'
   ]
   const [current, setCurrent] = useState(arrIMg[0])


   return (
      <div className={style.gallery}>
         <div className={style.gallery__current}>
            <img src={current} alt='####'/>
         </div>
         <div className={style.gallery__box}>
            {
               arrIMg.map(item => (
                  <div onClick={() => setCurrent(item)} className={current === item ? style.gallery__box_item_active : style.gallery__box_item} />
               ))
            }
         </div>
      </div>
   )
}

export default Gallery
