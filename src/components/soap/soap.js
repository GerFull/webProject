import { useEffect, useState } from 'react';
import style from '../soap/soap.module.scss';

function Soap() {

   const [windowInnerWidth, setwindowInnerWidth] = useState()

   useEffect(() => {
      setwindowInnerWidth(document.documentElement.clientWidth)
      window.addEventListener("resize", handleWidth);
   })

   const handleWidth = () => {
      setwindowInnerWidth(window.innerWidth)
   };

   const soap = [
      {
         id: 1,
         name: 'Апельсиновый цвет',
         price: '600 ₽',
         img: '/images/soap1.png'
      },
      {
         id: 2,
         name: 'Горная лаванда',
         price: '600 ₽',
         img: '/images/soap2.png'
      },
      {
         id: 3,
         name: 'Роза и бессмертник',
         price: '700 ₽',
         img: '/images/soap3.png'
      },
      {
         id: 4,
         name: 'Вербена',
         price: '650 ₽',
         img: '/images/soap4.png'
      },
      {
         id: 5,
         name: 'Можжевельник',
         price: '440 ₽',
         img: '/images/soap5.png'
      },
      {
         id: 6,
         name: 'Роза',
         price: '440 ₽',
         img: '/images/soap6.png'
      },
      {
         id: 7,
         name: 'Роза и бессмертник',
         price: '440 ₽',
         img: '/images/soap7.png'
      },
      {
         id: 8,
         name: 'Лаванда и лемонграсс',
         price: '440 ₽',
         img: '/images/soap8.png'
      },
      {
         id: 9,
         name: 'Черноморское с ламинарией         ',
         price: '440 ₽',
         img: '/images/soap9.png'
      },
      {
         id: 10,
         name: 'Мимоза',
         price: '440 ₽',
         img: '/images/soap10.png'
      },
      {
         id: 11,
         name: 'Сочный цитрус',
         price: '440 ₽',
         img: '/images/soap11.png'
      },
      {
         id: 12,
         name: 'Хвойное с апельсином',
         price: '440 ₽',
         img: '/images/soap12.png'
      },
   ]



   return (
      <div>
         <div className={style.soap__itemBox}>
            <div className={style.soap__title}>
               Каталог
            </div>


            <div className={style.soap__catalog}>
               {

                  soap.slice(0, windowInnerWidth > 768 ? 4 : 2).map(item => (
                     <div key={item.id} className={style.soap__item}>
                        <img src={item.img} alt='354' />
                        <div className={style.soap__item_name}>{item.name}</div>
                        <div className={style.soap__item_name}>{item.price}</div>
                        <img className={style.soap__item_buy} src='/images/buyImg.png' />
                     </div>
                  ))
               }


            </div>

         </div>
         <div className={style.soap__line} />
         <div className={style.soap__catalog}>
            {
               soap.slice(4, 8).map(item => (
                  <div key={item.id} className={style.soap__item}>
                     <img src={item.img} alt='354' />
                     <div className={style.soap__item_name}>{item.name}</div>
                     <div className={style.soap__item_name}>{item.price}</div>
                     <img className={style.soap__item_buy} src='/images/buyImg.png' />
                  </div>
               ))
            }


         </div>
         {
            windowInnerWidth > 768 ?
               <div className={style.soap__catalog}>
                  {
                     soap.slice(8).map(item => (
                        <div key={item.id} className={style.soap__item}>
                           <img src={item.img} alt='354' />
                           <div className={style.soap__item_name}>{item.name}</div>
                           <div className={style.soap__item_name}>{item.price}</div>
                           <img className={style.soap__item_buy} src='/images/buyImg.png' />
                        </div>
                     ))
                  }


               </div> : null}
         {
            windowInnerWidth > 768 ?
               <div>
                  <div className={style.soap__lineBottom} />
                  <div className={style.soap__info}>
                     <div className={style.soap__info_item}>
                        <img src='/images/oil.png' />
                        <p>
                           НАТУРАЛЬНЫЕ<br /> МАСЛА
                        </p>
                     </div>
                     <div className={style.soap__info_item1}>
                        <img src='/images/hand.png' />
                        <p>
                           РУЧНАЯ РАБОТА
                        </p>
                     </div>
                     <div className={style.soap__info_item}>
                        <img src='/images/coupon.png' />
                        <p>
                           КУПОН НА 1000 РУБ.<br /> КАЖДОМУ
                        </p>
                     </div>
                  </div>
               </div> : null
         }
         {
            windowInnerWidth < 768 ? <div className={style.soap__lineBottom} />: null
         }
         
      </div>
   )
}

export default Soap
