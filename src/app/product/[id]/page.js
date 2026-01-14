'use client'

import { use } from 'react'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import Counter from '@/components/counter/Counter'
import styles from './productSingle.module.css'

function Page({ params }) {

  const { id } = use(params)
  
  const product = useSelector(state => state.products.products).find(item => item.id === parseInt(id))
  if (!product) {
    return <div className='custom_container'><h1>Product not found</h1></div>
  }

  return (
    <div className={`${styles.single_product_page_wrapper} custom_container`}>
        <div className={styles.product_content}>
            <div className={styles.product_image}>
              <Image src={product.image} width={200} height={200} quality={100} alt={product.title} />
            </div>
            <div className={styles.product_info}>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>Price: R$ {product.price}</h3>
                <Counter product={product} />
            </div>
        </div>
    </div>
  )
}

export default Page