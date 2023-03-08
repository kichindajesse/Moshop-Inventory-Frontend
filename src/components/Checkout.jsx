import React, { useState, useEffect } from 'react';
import { getOrders, createOrder, updateOrder } from '../services/api';
import OrderItem from '../containers/OrderItem';

function Checkout() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getOrders();
      setOrders(data);
    }
    fetchData();
  }, []);

  async function handleCreateOrder(order) {
    const data = await createOrder(order);
    setOrders(prevOrders => [...prevOrders, data]);
  }

  async function handleUpdateOrder(id, order) {
    await updateOrder(id, order);
    setOrders(prevOrders =>
      prevOrders.map(o => (o.id === id ? { ...o, ...order } : o))
    );
  }

  return (
    <div>
      <h2>Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <OrderItem order={order} onUpdateOrder={handleUpdateOrder} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checkout;

