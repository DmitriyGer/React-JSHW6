import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProduct } from '../redux/productSlice';

const EditProductForm = ({ product, onClose }) => {
  const dispatch = useDispatch();
  const [updatedProduct, setUpdatedProduct] = useState(product);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(updatedProduct));
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={updatedProduct.name}
        onChange={handleChange}
        placeholder="Имя продукта"
        required
      />
      <input
        type="text"
        name="description"
        value={updatedProduct.description}
        onChange={handleChange}
        placeholder="Описание"
        required
      />
      <input
        type="number"
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
        placeholder="Цена"
        required
      />
      <button type="submit">Сохранить изменения</button>
      <button type="button" onClick={onClose}>Отмена</button>
    </form>
  );
};

export default EditProductForm;
