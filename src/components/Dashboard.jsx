import React, { useState, useEffect } from 'react';
import ProductsList from './ProductList';
import OrderList from '../containers/OrderList';
import { getProducts, getOrders, updateOrder } from '../services/api';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await getProducts();
      setProducts(productsData);

      const ordersData = await getOrders();
      setOrders(ordersData);
    }
    fetchData();
  }, []);

  async function handleUpdateOrder(id, updatedOrder) {
    await updateOrder(id, updatedOrder);
    const updatedOrders = orders.map(order => (order.id === id ? { ...order, ...updatedOrder } : order));
    setOrders(updatedOrders);
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <ProductsList products={products} />
      <OrderList orders={orders} onUpdateOrder={handleUpdateOrder} />
    </div>
  );
}

export default Dashboard;
