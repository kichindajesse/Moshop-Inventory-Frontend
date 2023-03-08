import React from 'react';

function OrderList({ orders }) {
  return (
    <div>
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Customer Email</th>
            <th>Status</th>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.status}</td>
              <td>
                <ul>
                  {order.items.map(item => (
                    <li key={item.id}>
                      {item.quantity} x {item.product.name}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
