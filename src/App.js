import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';
import products from './product.json'
import { useState, useEffect } from 'react'

function App() {
  const totalMoney = 300;
  const [money, setMoney] = useState(totalMoney);
  const [received, setReceived] = useState([]);
  const [total, setTotal] = useState(0);

  const buyProduct = (product) => {
    if (product.price > money) { return }
    const checkReceived = received.find(data => data.id === product.id)
    if (checkReceived) {
      checkReceived.amount += 1;
      setReceived(prevState => {
        return [...prevState.filter(item => item.id !== product.id), checkReceived]
      })
    }
    else {
      setReceived(prevState => {
        return [...prevState, { ...product, amount: 1 }]
      })
    }
  }

  const sellProduct = (product) => {
    const checkReceived = received.find(data => data.id === product.id)
    if (checkReceived && checkReceived.amount > 0) {
      checkReceived.amount -= 1;
      setReceived(prevState => {
        return [...prevState.filter(item => item.id !== product.id), checkReceived]
      })
    }
    if(checkReceived && checkReceived.amount === 1){
      setReceived(prevState => {
        return [...prevState.filter(item => item.id !== product.id)]
      })
    }
  }

  const clearAll = () =>{
    setReceived([]);
  }

  console.log(received);
  useEffect(() => {
    let totalReceived = received.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue.amount * currentValue.price;
    }, 0);
    setTotal(totalReceived);
    console.log(totalReceived);
  }, [received])

  useEffect(() => {
    setMoney(totalMoney - total)
  }, [total])


  return (
    <div className='main'>
      <Header money={money}></Header>
      <div className='products-container'>
        {products.map((product) => {
          return <Product key={product.id} data={product} total={money} amount={received.filter(data => data.id === product.id)} buyProduct={buyProduct} sellProduct={sellProduct}></Product>
        })}
      </div>
      <Basket spendMoney={totalMoney - money} data={received} clearAll={clearAll}></Basket>
    </div>
  );
}

export default App;
