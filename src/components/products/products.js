import style from '../products/products.module.scss';


function Products() {
   const pr =
   {
      id: Date.now(),
      name: 'Апельсиновый цвет',
      price: '600₽',
      img: '/images/soap1.png'
   }


   return (
      <>
         <div className={style.products}>
            <div className={style.products__title}>корзина</div>
            <div className={style.products__container}>
               <div className={style.products__itemBox}>
                  <div className={style.products__item}>
                     <img src={pr.img} />
                     <div className={style.products__name}>
                        <div className={style.products__item_title}>
                           <p>{pr.name}</p>
                           <img src='/images/trash.png' />
                        </div>
                        <div className={style.products__count}>
                           <img src='/images/minus.png' />
                           <p>1</p>
                           <img src='/images/plus.png' />
                        </div>
                     </div>
                     <div className={style.products__item_price}>
                        {pr.price}
                     </div>
                  </div>
               </div>
               <div className={style.products__buy}>
                  <div>
                     <div className={style.products__buy_title}>
                        <p>Итого:</p>
                        <p>600 р</p>
                     </div>
                     <p className={style.products__buy_text}>Товары (1 шт)</p>
                     <div className={style.products__buy_delivery}>
                        <p className={style.products__buy_text}>Сбор за доставку:</p>
                        <span>0 р</span>
                     </div>
                  </div>

                  <div className={style.products__buy_btn}>
                     <p>Оплатить</p>
                  </div>
               </div>
            </div>
         </div>
      </>

   )
}

export default Products

