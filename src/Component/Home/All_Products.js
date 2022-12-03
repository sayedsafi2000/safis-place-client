import React from 'react';
import { Link } from 'react-router-dom';

const AllProducts = ({ product }) => {
    console.log(product)
    const { title, price, stock, brand, discountPercentage, thumbnail } = product;

    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className='w-full' src={thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>{ }</p>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">Price: {price} </div>
                    <div className="badge badge-outline">Brand{brand}</div>
                </div>
                <div>
                    <Link to={`/purchase/${product._id}`}>
                        <button className="btn btn-warning">Buy Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;