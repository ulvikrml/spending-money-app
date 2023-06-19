import React from 'react'
import './Product.css'

const Product = ({ data, buyProduct, sellProduct, amount, total }) => {
    const amountData = amount[0]?.amount;
    return (
        <div className='product'>
            <h3>{data.title}</h3>
            <img src={require(`../assets/image/${data.image}.png`)} alt={data.title} />
            <div className="product-footer">
                <button class="sell-btn" disabled={amountData === 0} onClick={()=>sellProduct(data)}>Sell</button>
                <p className='product-price'>${data.price}</p>
                <button class="buy-btn" disabled={total < data.price} onClick={()=>buyProduct(data)}>Buy</button>
            </div>
            <p>Amount = {amountData ? amountData : '0'}</p>
        </div>
    )
}

export default Product;