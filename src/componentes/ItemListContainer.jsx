import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import data from '../data/products.json';
import { ItemList } from './ItemList';


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const promise = new Promise((resolve,rejetc) => {
        setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => { 
        if(!id) {
        setProducts(data);
        } else {
            const productsFiltered = data.filter(
                (product) => product.category === id
                );
            setProducts(productsFiltered);
        }
    }); 
}, []);

    console.log(products);

    return (
    <Container className="">
        <h1>{props.greeting}</h1>
        <div style={{display:"flex", flexWrap:"wrap"}}> <ItemList products={ products } />
        </div>
        </Container>
    );
};