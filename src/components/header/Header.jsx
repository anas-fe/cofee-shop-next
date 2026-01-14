'use client'

import classes from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

function Header() {
  const cartItems = useSelector(state => state.cart.totalQuantity)
  return (
    <div className='custom_container'>
      <div className={classes.header_wrapper}>
        <Link href="/" className={classes.header_logo}>
          <Image src="/images/Logo.svg" width={100} height={100} alt='logo' />
        </Link>
        <div className={classes.header_items_wrapper}>
          <span className={classes.location_label}>
            <Image src="/assets/images/locationIcon.png" width={15} height={15} alt='LocationLogo' />
            Porto Alegre, RS
          </span>
          <Link href="/cart" className={classes.header_cart_btn}><Image src="/assets/images/headerCartIcon.png" width={15} height={15} alt='cartLogo' /> <span>{cartItems}</span></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
