import React from 'react'
import './Product.css'

const Product = ({ data, buyProduct, sellProduct, amount, total }) => {
    const amountData = amount[0]?.amount;
    console.log(amountData);
    return (
        <div className='product'>
            <h3>{data.title}</h3>
            <div className="product-footer">
                <button disabled={amountData === 0} onClick={()=>sellProduct(data)}>Sell</button>
                <p className='product-price'>${data.price}</p>
                <button disabled={total < data.price} onClick={()=>buyProduct(data)}>Buy</button>
            </div>
            <p>Amount = {amountData ? amountData : '0'}</p>
        </div>
    )
}

export default Product;