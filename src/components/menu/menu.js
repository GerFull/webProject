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
                  <img src='/images/масло.png' />
                  <p>НАТУРАЛЬНЫЕ МАСЛА</p>
               </div>
               <div className={style.menu__diffrences_item}>
                  <img src='/images/ручная работа.png' />
                  <p>РУЧНАЯ РАБОТА</p>
               </div>
               <div className={style.menu__diffrences_item}>
                  <img src='/images/иконка купон.png' />
                  <p>КУПОН НА 1000 РУБ. КАЖДОМУ</p>
               </div>
            </div>

            <div class={style.menu__search}>

               <input type="text" placeholder="Искать здесь..." />
               <button>поиск</button>
            </div>

         </div>
         <div className={style.menu__buy}>
               <img src='/images/free-icon-shopping-cart-694530.png'/>
               <div>
                  <p>Товаров:</p>
                  <p>Сумма:</p>
               </div>
         </div>
      </div>
   )
}

