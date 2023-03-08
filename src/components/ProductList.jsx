import React, { useState } from 'react';
import { deleteProduct, updateProduct, createProduct } from '../services/api';

function ProductsList({ products, onUpdateProduct, onDeleteProduct }) {
  const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '' });
  const [editProduct, setEditProduct] = useState({ id: '', name: '', description: '', price: '' });

  function handleNewProductChange(event) {
    const { name, value } = event.target;
    setNewProduct(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleNewProductSubmit(event) {
    event.preventDefault();
    const data = await createProduct(newProduct);
    products.push(data);
    setNewProduct({ name: '', description: '', price: '' });
  }

  function handleEditProductChange(event) {
    const { name, value } = event.target;
    setEditProduct(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleEditProductSubmit(event) {
    event.preventDefault();
    await updateProduct(editProduct.id, editProduct);
    onUpdateProduct(editProduct.id, editProduct);
    setEditProduct({ id: '', name: '', description: '', price: '' });
  }

  async function handleDeleteProduct(id) {
    await deleteProduct(id);
    onDeleteProduct(id);
  }

  return (
    <div className="product-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                {product.id === editProduct.id ? (
                  <input type="text" name="name" value={editProduct.name} onChange={handleEditProductChange} />
                ) : (
                  product.name
                )}
              </td>
              <td>
                {product.id === editProduct.id ? (
                  <input type="text" name="description" value={editProduct.description} onChange={handleEditProductChange} />
                ) : (
                  product.description
                )}
              </td>
              <td>
                {product.id === editProduct.id ? (
                  <input type="text" name="price" value={editProduct.price} onChange={handleEditProductChange} />
                ) : (
                  product.price
                )}
              </td>
              <td>
                {product.id === editProduct.id ? (
                  <>
                    <button onClick={handleEditProductSubmit}>Save</button>
                    <button onClick={() => setEditProduct({ id: '', name: '', description: '', price: '' })}>
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => setEditProduct(product)}>Edit</button>
                    <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>New Product</h2>
      <form onSubmit={handleNewProductSubmit}>
        <label htmlFor="new-name">Name:</label>
        <input id="new-name" type="text" name="name" value={newProduct.name} onChange={handleNewProductChange} required />
        <label htmlFor="new-description">Description:</label>
        <input id="new-description" type="text" name="description" value={newProduct.description} onChange={handleNewProductChange} required />
<label htmlFor="new-price">Price:</label>
<input id="new-price" type="text" name="price" value={newProduct.price} onChange={handleNewProductChange} required />
<button type="submit">Create</button>
</form>
</div>
);
}

export default ProductsList;
