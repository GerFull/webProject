import style from '../menu/menu.module.scss';

export default function Menu() {
   return (
      <div className={style.menu}>
         <div>
            <img className={style.menu__logo} src='/images/логотип.png' />
         </div>


         <div className={style.menu__center}>

            <div className={style.menu__diffrences}>
               <div className={style.menu__diffrences_item}>
                  <img src='/images/rosemary.png' />
                  <p>НАТУРАЛЬНЫЕ МАСЛА</p>
               </div>
               <div className={style.menu__diffrences_item}>
                  <img src='/images/hand-made.png' />
                  <p>РУЧНАЯ РАБОТА</p>
               </div>
               <div className={style.menu__diffrences_item}>
                  <img src='/images/coupon.png' />
                  <p>КУПОН НА 1000 РУБ. КАЖДОМУ</p>
               </div>
            </div>

            <div class={style.menu__search}>

               <input type="text" placeholder="Искать здесь..." />
               <button>поиск</button>
            </div>

         </div>

         <div className={style.menu__buy}>
            <img src='/images/free-icon-shopping-cart-694530.png' />
            <div>
               <div className={style.menu__buy_item}>
                  <div>Товаров:</div>
                  <div>1шт</div>
               </div>

               <div className={style.menu__buy_item}>
                  <div>Сумма:</div>
                  <div>5000 руб.</div>
               </div>
            </div>
         </div>
      </div>
   )
}

