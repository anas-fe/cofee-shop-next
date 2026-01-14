import Image from "next/image"
import Products from "@/components/products/Products"
// import axios from "axios"

async function Home() {

//  const productsList = await axios.get('https://fakestoreapi.com/products/')
//  const data = productsList.data

 return (
    <>
    <div className="hero_sec_wrapper">
      <div className="hero_section custom_container">
         <div className="hero_section_content">
            <div className="hero_section_content_headings">
                <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
            </div>
            <div className="hero_section_content_features">
                <div className="feature_item">
                    <span className="feature_icon icon_cart"><Image src="/images/cartFeatureIcon.png" width={20} height={20} alt="cart" quality={100} /></span>
                    <p>Compra simples e segura</p>
                </div>
                <div className="feature_item">
                    <span className="feature_icon icon_package"><Image src="/images/packageFeatureIcon.png" width={20} height={20} alt="package" quality={100} /></span>
                    <p>Embalagem mantém o café intacto</p>
                </div>
                <div className="feature_item">
                    <span className="feature_icon icon_timer"><Image src="/images/timeFeatureIcon.png" width={20} height={20} alt="timer" quality={100} /></span>
                    <p>Entrega rápida e rastreada</p>
                </div>
                <div className="feature_item">
                    <span className="feature_icon icon_coffee"><Image src="/images/cofeeFeatureIcon.png" width={20} height={20} alt="cofee" quality={100} /></span>
                    <p>O café chega fresquinho até você</p>
                </div>
              </div>
            </div>
            <div className="hero_section_image">
              <Image src="/images/heroImage.png" width={1200} height={1200} alt="heroImg" />
            </div>
        </div>
      </div>
      <div className="custom_container products_wrapper">
        <Products />
      </div>
    </>
  )
}

export default Home
