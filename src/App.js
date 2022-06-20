import './App.css';
import mainCourse from './data';
import Cart from './Components/Cart.js';
import React, { useState } from 'react';


function App() {

  const [total, setTotal]=useState(0);
  const [orders, setOrders]=useState([]);  


  return (
    <div className="App">
      <header>
      <h1>Menu</h1>
      </header>
      <ul className="food-list">
       {mainCourse.map(
         food => 
         <li key={food.img}> <img alt="foods" src={food.img} /> 
          <ul className="FoodInfo">
            <li className='FoodName' key={food.name}>{food.name}</li>
            <li key={food.price}>${food.price.toFixed(2)}</li>

            <button type="button" class="btn btn-default" onClick={() => {
              setTotal(Math.floor((total+food.price)*100)/100 );
              setOrders(order=>[...order, food.name]);
              }}>ADD</button>     
          </ul>
          <br/>
         </li>
       )}
      </ul>

    <div className="containerScroll">
      <h2>Order List</h2>
      <div className="orders">
      <ul>
      {orders.map((order)=>(
          <li key={order}>{order}</li>   
      ))}
      </ul>
      </div>
      <Cart TOTAL={total} />

    </div>
    </div>
  );
}

export default App;
