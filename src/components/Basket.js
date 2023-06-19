import React from 'react';
import './Basket.css';

const Basket = ({ data, clearAll, spendMoney }) => {
  console.log(data);
  return (
    <div className="basket-container">
      <p className="basket-title">Products you have bought:</p>
      <ul className="basket-list">
        {data.map((item) => {
          return (
            <li className="basket-item" key={item.id}>
              {item.title} - {item.amount}
            </li>
          );
        })}
      </ul>
      <p className="basket-total">You have spent ${spendMoney}</p>
      <button className="basket-clear-button" onClick={clearAll}>
        Clear All
      </button>
    </div>
  );
};

export default Basket;
