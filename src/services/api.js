import React, { useState } from 'react';

const API_URL = 'http://localhost:9292';

export const getProducts = () => {
  return fetch(`${API_URL}/products`)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const createProduct = (product) => {
  return fetch(`${API_URL}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const updateProduct = (id, product) => {
  return fetch(`${API_URL}/products/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const deleteProduct = (id) => {
  return fetch(`${API_URL}/products/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const getOrders = () => {
  return fetch(`${API_URL}/orders`)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const createOrder = (order) => {
  return fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const updateOrder = (id, order) => {
  return fetch(`${API_URL}/orders/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(order),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const deleteOrder = (id) => {
  return fetch(`${API_URL}/orders/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const getCategories = () => {
  return fetch(`${API_URL}/categories`)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const createCategory = (category) => {
  return fetch(`${API_URL}/categories`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const updateCategory = (id, category) => {
  return fetch(`${API_URL}/categories/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const deleteCategory = (id) => {
  return fetch(`${API_URL}/categories/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const getItemsByOrderId = (orderId) => {
  return fetch(`${API_URL}/order_items?order_id=${orderId}`)
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const createOrderItem = (item) => {
  return fetch(`${API_URL}/order_items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const updateOrderItem = (id, item) => {
  return fetch(`${API_URL}/order_items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

export const deleteOrderItem = (id) => {
  return fetch(`${API_URL}/order_items/${id}`, {
    method: 'DELETE',
  })
    .then(response => response.json())
    .catch(error => console.error(error));
};

