import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default () => {
    useEffect(() => {
        loadProducts();
    });

    const [products, setProducts] = useState([]);

    const loadProducts = async () => {
        const response = await api.get('/products');
        setProducts(response.data.docs);
    }

    return <div className="product-list">
        {products.map(product => (
            <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <a href="">Acessar</a>
            </article>
        ))}
    </div>
}