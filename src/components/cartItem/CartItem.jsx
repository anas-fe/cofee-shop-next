'use client'

import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@/store/cartSlice';
import classes from './cartItem.module.css';
import Counter from '@/components/counter/Counter';
import { FaRegTrashAlt } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';


function CartItem() {

    const cartItems = useSelector(state => state.cart.items)

    console.log(cartItems);
    

    const totalCartAmount = useSelector(state => state.cart.totalPrice)
    
    const dispatch = useDispatch()

    function removeItemHandler(itemId){
        dispatch(clearCart(itemId));
    }

  return (
    <div className={classes.cart_items_wrapper}>
        <h4>Cafés selecionados</h4>
        <div className={classes.cart_items_inner}>
            {cartItems.map(item => (
                <div key={item.id} className={classes.cart_item_single}>
                    <div className={classes.item_details}>
                        <div className={classes.item_image}>
                            <Link href={`product/${item.id}`}>
                                <Image src={item.image} alt="Product" height={100} width={100} />
                            </Link>
                        </div>
                        <div className={classes.item_action_btns}>
                            <p>{item.title}</p>
                            <div className={classes.item_action_btns_inner}>
                                <Counter product={item} />
                                <button className={classes.remove_item_btn} onClick={(() => removeItemHandler({item}))}><span><FaRegTrashAlt /></span>Remover</button>
                            </div>
                        </div>
                    </div>
                    <div className={classes.item_price}>
                        <p>R$ {(item.totalPrice || item.price * item.quantity).toFixed(2)}</p>
                    </div>
                </div>
            ))}
            
            <div className={classes.items_total_wrapper}>
                <div className={classes.items_total_inner}>
                    <p>Total de itens</p>
                    <p>R$ {totalCartAmount > 0 ? (totalCartAmount).toFixed(2) : 0.00}</p>
                </div>
                <div className={classes.items_total_inner}>
                    <p>Entrega</p>
                    <p>R$ 3.70</p>
                </div>
                <div className={classes.items_total_inner}>
                    <h3>Total de itens</h3>
                    <h3>R$ {totalCartAmount && totalCartAmount > 0 ? (totalCartAmount + 3.70).toFixed(2) : 0.00}</h3>
                </div>
            </div>
            <button className={classes.btn_checkout}>confirmar pedido</button>
        </div>
    </div>
  )
}

export default CartItem
