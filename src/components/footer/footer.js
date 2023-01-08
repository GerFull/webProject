import { useEffect, useState } from 'react';
import style from '../footer/footer.module.scss';

function Footer() {



   const [windowInnerWidth, setwindowInnerWidth] = useState()


   useEffect(() => {
      setwindowInnerWidth(document.documentElement.clientWidth)
      window.addEventListener("resize", handleWidth);
   })

   const handleWidth = () => {
      setwindowInnerWidth(window.innerWidth)
   };


   return (
      <div className={style.footer}>
         {
            windowInnerWidth > 768 ? <div className={style.footer__socialContainer}>
               <div className={style.footer__social}>
                  <p>мы в социальных сетях</p>
                  <img src='images/social.png' />
               </div>
               <img src='images/chat.png' />
            </div> : null
         }


         <div className={style.footer__contactBox}>
            <div className={style.footer__company}>
               <p className={style.footer__contactBox__title}>КОМПАНИЯ</p>
               <p className={style.footer__contactBox__text}>О нас</p>
               <p className={style.footer__contactBox__text}>Вакансии</p>
               <div className={style.footer__text}>
                  <p className={style.footer__contactBox__text}>Адрес:</p>
                  <div>
                     <p className={style.footer__contactBox__text}>г. Екатеринбург, ул.<br /> Краснолесья 5</p>
                  </div>
               </div>
               <div className={style.footer__text}>
                  <p className={style.footer__contactBox__text}>Тел.:</p>
                  <div className={style.footer__text_adress}>
                     <p className={style.footer__contactBox__text}>+7 (919)-444-55-11</p>
                  </div>
               </div>
            </div>
            <div className={style.footer__buyers}>
               <p className={style.footer__contactBox__title}>ПОКУПАТЕЛЯМ</p>
               <p className={style.footer__contactBox__text} >Оплата</p>
               <p className={style.footer__contactBox__text}>Вопросы</p>
               <p className={style.footer__contactBox__text}>Доставка</p>

            </div>
         </div>
      </div>
   )
}

export default Footer
