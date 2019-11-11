import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default ({ match: { params: { id } } }) => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        }
        fetchProduct();
    }, []);

    return (
        <div className="product-info">
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <p>URL: <a href={product.url} target="_blank" rel="noopener noreferrer">{product.url}</a></p>

        </div>
    );
}