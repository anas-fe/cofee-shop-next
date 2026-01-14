import CartItem from '@/components/cartItem/CartItem'
import CartForm from '@/components/form/CartForm'

function Page() {
  return (
    <div>
        <div className="cart_wrapper custom_container">
            <CartForm />
            <CartItem />
        </div>
    </div>
    )
}

export default Page
