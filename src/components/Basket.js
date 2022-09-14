import React from 'react'

const Basket = ({data, clearAll, spendMoney}) => {
    console.log(data);
  return (
    <div>
        <p>
        Product you have bought:
        </p>
        <ul>
        {data.map(item=>{
            return <li>{item.title} - {item.amount}</li>
        })}
        </ul>
        <p>You have spent ${spendMoney}</p>
        <button onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default Basket