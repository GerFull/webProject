import { useEffect, useState } from 'react';
import { Link, Router } from 'react-router-dom';
import style from '../gallery/gallery.module.scss';

function Gallery() {
   const arrIMg = [
      '/images/lavenda.jpg'
   ]
   const [current, setCurrent] = useState(arrIMg[0])
   


   return (
      <div className={style.gallery}>
         <div className={style.gallery__current}>
            <img src={current} alt='####' />
         </div>
         <Link to='/catalog'>
            <div className={style.gallery__btn}>За покупками
               <img src='/images/arrow.png' alt='####' />
            </div>
         </Link>
      </div>
   )
}

export default Gallery
