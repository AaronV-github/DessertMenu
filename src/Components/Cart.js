import React from 'react';
import './Cart.css'

function Cart(props){
    return (
        <div className="total">
            <p>Total: ${props.TOTAL.toFixed(2)}</p>
            <button type="button" class="btn btn-default btn-lg btn-block">ORDER NOW</button>
        </div>

        
    );
}

export default Cart;