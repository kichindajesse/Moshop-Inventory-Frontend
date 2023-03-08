import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { getProducts, createProduct, updateProduct, deleteProduct, getCategories, updateCategory, getOrders } from './services/api';
import ProductsList from './components/ProductList';
import Checkout from './components/Checkout';
import ProductCatalog from './components/ProductCatalog';
import LoginPage from './components/LoginPage';
import OrderList from './containers/ItemList';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const productsData = await getProducts();
      setProducts(productsData);
      const categoriesData = await getCategories();
      setCategories(categoriesData);
      const ordersData = await getOrders();
      setOrders(ordersData);
    }
    fetchData();
  }, []);

  async function handleCreateProduct(product) {
    const data = await createProduct(product);
    setProducts(prevProducts => [...prevProducts, data]);
  }

  async function handleUpdateProduct(id, product) {
    await updateProduct(id, product);
    setProducts(prevProducts =>
      prevProducts.map(p => (p.id === id ? { ...p, ...product } : p))
    );
  }

  async function handleDeleteProduct(id) {
    await deleteProduct(id);
    setProducts(prevProducts => prevProducts.filter(p => p.id !== id));
  }

  async function handleUpdateCategory(id, category) {
    await updateCategory(id, category);
    setCategories(prevCategories =>
      prevCategories.map(c => (c.id === id ? { ...c, ...category } : c))
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/inventory">
          <div className="container mt-5">
            <h1 className="text-center"><strong>Moshop inventory</strong></h1>
            <div className="row mt-5">
              <div className="col-lg-4">
                <ProductCatalog categories={categories} onUpdateCategory={handleUpdateCategory} onAddProduct={handleCreateProduct} />
              </div>
              <div className="col-lg-8">
                <ProductsList
                  products={products}
                  onUpdateProduct={handleUpdateProduct}
                  onDeleteProduct={handleDeleteProduct}
                />
              </div>
            </div>
            <hr />
            <Checkout />
          </div>
        </Route>
        <Route path="/orders">
          <OrderList orders={orders} />
        </Route>
        <Route path="/dashboard">
          <Dashboard products={products} categories={categories} orders={orders} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
