import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../redux/productSlice';

const ProductList = () => {
  const products = useSelector(state => state.products.products); // Получаем список продуктов
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список продуктов</h2>
      {products.length === 0 && <p>Нет продуктов</p>}
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Цена: {product.price} ₽</p>
            <p>Доступность: {product.available ? 'Доступен' : 'Не доступен'}</p>
            <button onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
            <button onClick={() => dispatch(toggleAvailability(product.id))}>
              {product.available ? 'Сделать недоступным' : 'Сделать доступным'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
