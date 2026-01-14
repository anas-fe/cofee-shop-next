'use client'

// import locationIcon from '../../assets/images/cartLocationIcon.png'
import { useState } from 'react'
import { CiCreditCard1 } from 'react-icons/ci'
import { PiBankLight } from 'react-icons/pi'
import { BsCash } from 'react-icons/bs'
import classes from './cartForm.module.css'
import Image from 'next/image'

function CartForm() {

    const [payment, setPayment] = useState('credit')

  return (
    <div className={classes.cart_inner}>
        <h4>Complete seu pedido</h4>
        <div className={classes.cart_form}>
            <div className={classes.cart_location}>
                <Image className={classes.cart_location_icon} src="/images/cartLocationIcon.png" alt="Location" width={20} height={20} />
                <div className={classes.location_info}>
                    <p>Endereço de Entrega</p>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </div>

            <form className={classes.address_form}>

                <div className={classes.form_row}>
                    <input type="text" placeholder="CEP" />
                </div>

                <div className={classes.form_row}>
                    <input type="text" placeholder="Rua" />
                </div>

                <div className={classes.form_row}>
                    <input type="text" placeholder="Número" />
                    <input type="text" placeholder="Complemento" />
                </div>

                <div className={classes.form_row}>
                    <input type="text" placeholder="Bairro" />
                    <input type="text" placeholder="Cidade" />
                    <input type="text" placeholder="UF" />
                </div>

            </form>
        </div>
        <div className="payment_methods_wrapper">
            <div className="header_wrapper">
                <Image className="payment_image" src="/images/paymentIcon.png" alt="Location" width={20} height={20} />
                <div className="payment_info">
                    <p>Pagamento</p>
                    <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </div>

            <div className="payment_options">
                <label className="payment_card">
                <input
                    type="radio"
                    name="payment"
                    value="credit"
                    checked={payment === "credit"}
                    onChange={() => setPayment("credit")}
                />
                <div className="card_content">
                    <span className="icon"><CiCreditCard1 /></span> Cartão de Crédito
                </div>
                </label>

                <label className="payment_card">
                <input
                    type="radio"
                    name="payment"
                    value="debit"
                    checked={payment === "debit"}
                    onChange={() => setPayment("debit")}
                />
                <div className="card_content">
                    <span className="icon"><PiBankLight /></span> Cartão de Débito
                </div>
                </label>

                <label className="payment_card">
                <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={payment === "cash"}
                    onChange={() => setPayment("cash")}
                />
                <div className="card_content">
                    <span className="icon"><BsCash /></span> Dinheiro
                </div>
                </label>
            </div>

        </div>
    </div>
  )
}

export default CartForm
