import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import CartSummary from '../CartSummary'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeCartItem} = value
      const showEmptyView = cartList.length === 0

      const onClickRemove = () => {
        removeCartItem()
      }
      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <div className="cart-content-container">
                <div className="cart-heading-remove-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    className="cart-remove-button"
                    onClick={onClickRemove}
                  >
                    Remove all
                  </button>
                </div>
                <CartListView />
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default Cart
