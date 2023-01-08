import { useEffect, useState } from 'react';
import style from '../about/about.module.scss';


function About() {

   const [windowInnerWidth, setwindowInnerWidth] = useState()


   useEffect(() => {
      setwindowInnerWidth(document.documentElement.clientWidth)
      window.addEventListener("resize", handleWidth);
   })

   const handleWidth = () => {
      setwindowInnerWidth(window.innerWidth)
   };

   
   return (
      <>
         <div className={style.about}>
            <div className={style.about__title}>Кто мы</div>

            {/* <div className={style.about__subtitle}>
               <img className={style.about__logo} src='/images/logo.png' />
               <p className={style.about__logoTitle} ><span style={{ color: '#6E4D8C' }}>LAVE</span>NDER</p>
               <p className={style.about__logoText}> <span style={{ margin: '0 10px' }} >-</span> семейный бренд натуральной, эффективной и безопасной косметики.</p>
            </div> */}
            <div className={style.about__subtitleMini}>
               <p className={style.about__logoTitle} ><span style={{ color: '#6E4D8C' }}>LAVE</span>NDER</p>
               <p className={style.about__logoText}> семейный бренд натуральной, эффективной и безопасной косметики.</p>
            </div>


            <div className={style.about__boxItem}>
               <div className={style.about__item}>
                  <p>В основе наших продуктов лежат<br /><span style={{ color: '#6E4D8C' }}>оригинальные формулы, </span>качественные <br /> натуральные
                     ингредиенты.Травы для<br /> производства мы бережно <span style={{ color: '#6E4D8C' }}>собираем
                        вручную в<br /> горном экологически чистом районе Крыма.</span>
                  </p>
                  <img className={style.about__logo} src='/images/about-img1.svg' />
               </div>
               <div className={style.about__item}>
                  <p>Продукция обогащена <br /> пчелопродуктами с нашей пасеки,<br /> гидролатами и экстрактами <span style={{ color: '#6E4D8C' }}> растений,<br /> выращенных нами.</span>
                  </p>
                  <img className={style.about__logo} src='/images/about-img2.svg' />
               </div>
            </div>
            {
               windowInnerWidth > 768 ?
                  <>
                     <div className={style.about__title2}><p>От наших растений<br /> <span style={{ color: '#6E4D8C' }}>до вашей кожи</span></p></div>
                     <div className={style.about__subtitle2}>Вот уже более 15 лет мы изучаем, выращиваем и производим натуральную косметику.</div>
                     <div className={style.about__BoxImg}>
                        <img src='/images/study.png' alt='1' />
                        <img src='/images/grown.png' alt='1' />
                        <img src='/images/produce.png' alt='1' />
                     </div>
                     <div className={style.about__text}>
                        <p>Преимущества того, что все делаем сами:<span style={{ color: '#6E4D8C' }}> каждый этап всегда под <br /> контролем, </span>
                           влияние на окружающую среду ограничено, и мы <br /> ежедневно работаем над тем,
                           чтобы еще больше сократить его.</p>
                     </div>
                     <div className={style.about__text}>
                        <p>Мы гарантируем качество продукции по самым справедливым для вас ценам.<span style={{ color: '#6E4D8C' }}> Чтобы всегда<br /> предлагать лучшее от природы по разумной цене.</span></p>
                     </div>
                     <div className={style.about__info}>
                        <div className={style.about__info_item}>
                           <img src='/images/oil.png' />
                           <p>
                              НАТУРАЛЬНЫЕ<br /> МАСЛА
                           </p>
                        </div>
                        <div className={style.about__info_item1}>
                           <img src='/images/hand.png' />
                           <p>
                              РУЧНАЯ РАБОТА
                           </p>
                        </div>
                        <div className={style.about__info_item}>
                           <img src='/images/coupon.png' />
                           <p>
                              КУПОН НА 1000 РУБ.<br /> КАЖДОМУ
                           </p>
                        </div>
                     </div>
                  </> : null
                  }
         </div>
         {
            windowInnerWidth < 768 ?   <div className={style.about__line}/>: null
         }
       
      </>

   )
}

export default About
