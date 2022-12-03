import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AllProducts from './All_Products';
import "./Home.css"
const Home = () => {
    const [ products , setProduct] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setCount(data.count)
                setProduct(data.products)
            })
    }, [page,size])
    console.log(products)

    
    const pages = Math.ceil(count / size);
    return (
        <div>
            <div className="carousel carousel-center rounded-box">
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
                <div className="carousel-item">
                    <img src="https://placeimg.com/400/300/arch" alt="Pizza" />
                </div>
            </div>
            <div className='my-16 w-10/12 mx-auto'>
                <h1 className='text-4xl text-black my-5'>You can find here all you need</h1>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                        products.map(product =>
                            <AllProducts
                                key={product._id}
                                product={product}
                            >

                            </AllProducts>)
                    }
                </div>
            </div>
            <div className="pagination">
                <p>Currently Selected Page : {page}</p>
                {
                    [...Array(pages).keys()].map(number => <button
                        className={`
                        w-7 bg-slate-300 m-5 rounded-full text-center items-center font-bold
                        `}
                        key={number}
                        onClick={() => setPage(number)}
                    >
                        {number+1}
                    </button>)
                }
                <select onChange={event => setSize(event.target.value)}>
                    <option value="5">5</option>
                    <option value="10" selected>10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
            </div>
        </div>
    );
};

export default Home;