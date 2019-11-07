import React, {useState, useEffect} from 'react';
import api from '../../services/api';

export default () => {
    useEffect(() => {
        loadProducts();
    });

    const loadProducts = async () => {
        const response = await api.get('/products');
        console.log(response.data.docs);
    }

    return <h1>Hello World</h1>
}