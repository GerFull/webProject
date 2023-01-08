import style from '../Best-sellers/Best-sellers.module.scss';


function BestSellers() {
   return (
      <>
         <div className={style.bestSellers}>
            <p className={style.bestSellers__title}>БЕСТСЕЛЛЕРЫ</p>
            <div className={style.bestSellers__container}>

               <div className={style.bestSellers__item}>
                  <img src='/images/item1.svg' alt='354' />
                  <div className={style.bestSellers__item_name}>яблоко с корицей</div>
                  <div className={style.bestSellers__item_name}>450 p</div>
                  <img className={style.bestSellers__item_buy} src='/images/buyImg.png' />
               </div>
               <div className={style.bestSellers__item}>
                  <img src='/images/item2.svg' alt='354' />
                  <div className={style.bestSellers__item_name}>инжир и олива</div>
                  <div className={style.bestSellers__item_name}>500 p</div>
                  <img className={style.bestSellers__item_buy} src='/images/buyImg.png' />
               </div>
               <div className={style.bestSellers__item}>
                  <img src='/images/item3.svg' alt='354' />
                  <div className={style.bestSellers__item_name}>роза</div>
                  <div className={style.bestSellers__item_name}>450 p</div>
                  <img className={style.bestSellers__item_buy} src='/images/buyImg.png' />
               </div>

            </div>

         </div>
         <div className={style.bestSellers__surprise}>
            <div>
               <p className={style.bestSellers__surprise_title}>Удиви свою</p>
               <p className={style.bestSellers__surprise_subtitle}>Половинку!</p>
            </div>
            <img src='/images/surprise.svg' alt='354' />
         </div>
      </>
   )
}

export default BestSellers
