'use client'

import Image from "next/image"
import Counter from '@/components/counter/Counter'
import styles from './productCard.module.css'
import { BiSolidCart } from 'react-icons/bi'
import Link from 'next/link'
import { useDispatch, useSelector } from "react-redux"
import { setProductsList } from '@/store/productsSlice'
import { useEffect } from "react"
// removed unused axios import


function Products() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products) 

  useEffect(() => {

    const fetchData = async () => {
      const productsList = await fetch('https://fakestoreapi.com/products/', {cache: 'force-cache'})
      const data = await productsList.json()

      dispatch(setProductsList(data))
    }
    fetchData()
  }, [dispatch])

  //   const productsList = [
  //       { id: 1, title: "Expresso Tradicional", description: "O tradicional café feito com água quente e grãos moídos", price: 9.9, tags: ["Tradicional"], image: "/images/ExpressoTradicional.png", },
  //       { id: 2, title: "Expresso Americano", description: "Expresso diluído, menos intenso que o tradicional", price: 11.9, tags: ["Tradicional"], image: "/images/ExpressoAmericano.png", },
  //       { id: 3, title: "Expresso Cremoso", description: "Café expresso tradicional com espuma cremosa", price: 19.9, tags: ["Tradicional"], image: "/images/ExpressoCremoso.png", },
  //       { id: 4, title: "Expresso Gelado", description: "Bebida preparada com café expresso e cubos de gelo", price: 20.9, tags: ["Tradicional", "Gelado"], image: "/images/ExpressoGelado.png", },
  //       { id: 5, title: "Café com Leite", description: "Meio a meio de expresso tradicional com leite vaporizado", price: 9.9, tags: ["Tradicional", "Com Leite"], image: "/images/CafécomLeite.png", },
  //       { id: 6, title: "Latte", description: "Uma dose de café expresso com o dobro de leite e espuma cremosa", price: 29.0, tags: ["Tradicional", "Com Leite"], image: "/images/Latte.png", },
  //       { id: 7, title: "Capuccino", description: "Bebida com café feito de doses iguais de café, leite e espuma", price: 3.2, tags: ["Tradicional", "Com Leite"], image: "/images/Capuccino.png", },
  //       { id: 8, title: "Macchiato", description: "Café expresso misturado com um pouco de leite quente e espuma", price: 22.3, tags: ["Tradicional", "Com Leite"], image: "/images/Macchiato.png", },
  //       { id: 9, title: "Mocaccino", description: "Café expresso com calda de chocolate, pouco leite e espuma", price: 12.9, tags: ["Especial", "Com Leite"], image: "/images/Mocaccino.png", },
  //       { id: 10, title: "Chocolate Quente", description: "Bebida feita com chocolate dissolvido no leite quente e café", price: 15.0, tags: ["Especial", "Com Leite"], image: "/images/ChocolateQuente.png", },
  //       { id: 11, title: "Cubano", description: "Drink gelado de café expresso com rum, creme de leite e hortelã", price: 9.9, tags: ["Especial", "Alcoólico", "Gelado"], image: "/images/Cubano.png", },
  //       { id: 12, title: "Havaiano", description: "Bebida adocicada preparada com café e leite de coco", price: 9.9, tags: ["Especial"], image: "/images/Havaiano.png", },
  //       { id: 13, title: "Árabe", description: "Bebida preparada com grãos de café árabe e especiarias", price: 9.9, tags: ["Especial"], image: "/images/Árabe.png", },
  //       { id: 14, title: "Irlandês", description: "Bebida à base de café, uísque irlandês, açúcar e chantilly", price: 9.9, tags: ["Especial", "Alcoólico"], image: "/images/Irlandês.png" }
  // ]

  //   dispatch(setProductsList(productsList))
  // }, [])

  return (
    <>
    {products && products.map((product) => (
      <div key={product.id ?? product.title} className={styles.product_card}>
        <div className={styles.product_image}>
          <Link href={`/product/${product.id}`}>
            <Image src={product.image} width={100} height={100} alt="image" />
          </Link>
        </div>
        <div className={styles.product_info}>
          <span className={styles.product_tag}>{product.tags && product.tags.map((tag, index) => (<span key={index}>{tag}</span>))}</span>
          <h3>{product.title}</h3>
          <span className={styles.product_info_description}>{product.description}</span>
        </div>
        <div className={styles.productCardFooter}>
          <p>R$ <span className={styles.product_price_label}>{Number(product.price).toFixed(2)}</span></p>
          <div className={styles.cart_counter_wrapper}>
            <Counter product={product} />
            <Link href={"/cart"} className={styles.add_to_cart_btn} ><BiSolidCart /></Link>  
          </div>
        </div>
      </div>
    ))}
    </>
  )
}

export default Products
