import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import './styles.css';

export default () => {
    useEffect(() => {
        loadProducts();
    }, []);

    const [products, setProducts] = useState([]);
    const [productInfo, setProductInfo] = useState({});
    const [page, setPage] = useState(1);

    const loadProducts = async (pageNumber = 1) => {
        const response = await api.get(`/products?page=${pageNumber}`);

        const { docs, ...prodInfo } = response.data;

        setProducts(docs);
        setProductInfo(prodInfo);
        setPage(pageNumber);
    }

    const prevPage = () => {
        if (page === 1) return;

        const pageNumber = page - 1;

        loadProducts(pageNumber);
    }

    const nextPage = () => {
        if (page === productInfo.pages) return;

        const pageNumber = page + 1;

        loadProducts(pageNumber);
    }

    return <div className="product-list">
        {products.map(product => (
            <article key={product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <a href="">Acessar</a>
            </article>
        ))}
        <div className="actions">
            <button disabled={page === 1} onClick={prevPage}>Anterior</button>
            <button disabled={page === productInfo.pages} onClick={nextPage}>Próxima</button>
        </div>
    </div>
}