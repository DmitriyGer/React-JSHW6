import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productSlice';
import './AddProductForm.css';

const AddProductForm = () => {
  const dispatch = useDispatch();

  const [product, setProduct] = useState({
    id: Date.now(),
    name: '',
    description: '',
    price: '',
    available: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.description && product.price) {
      dispatch(addProduct(product));
      setProduct({
        id: Date.now(),
        name: '',
        description: '',
        price: '',
        available: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      <input
        type="text"
        name="name"
        value={product.name}
        onChange={handleChange}
        placeholder="Имя продукта"
        required
        className="input"
      />
      <input
        type="text"
        name="description"
        value={product.description}
        onChange={handleChange}
        placeholder="Описание"
        required
        className="input"
      />
      <input
        type="number"
        name="price"
        value={product.price}
        onChange={handleChange}
        placeholder="Цена"
        required
        className="input"
      />
      <button type="submit" className="submit-button">
        Добавить продукт
      </button>
    </form>
  );
};

export default AddProductForm;
