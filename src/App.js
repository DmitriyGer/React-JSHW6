import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from './redux/productSlice';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.products.theme);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className="app">
      <header>
        <h1>Каталог продуктов</h1>
        <button onClick={handleThemeToggle}>
          Переключить тему: {theme === 'light' ? 'Темная' : 'Светлая'}
        </button>
      </header>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default App;
