import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from 'swiper';
import "./Purchase.css"
const Purchase = () => {
    const singleProduct = useLoaderData();

    const { images } = singleProduct;
    const {
        _id,
        title,
        brand,
        category,
        description,
        discountPercentage,
        price,
        rating,
        stock,
    } = singleProduct;

    return (
        <div>
            <h2>hii{singleProduct.title}</h2>

            <div className="min-h-screen bg-base-200">
                <div className="flex justify-between">
                    <div className='w-6/12 flex flex-col lg:flex-row'>
                        <div className="w-full mx-auto" >
                            <Swiper
                                style={{
                                    "--swiper-navigation-color": "rgb(251 146 60)",
                                    "--swiper-pagination-color": "rgb(251 146 60)",
                                }}
                                spaceBetween={10}
                                navigation={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {images.map((image, idx) => (
                                    <SwiperSlide key={idx}>
                                        <img src={image} alt="" />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                        <div className='w-full lg:w-6/12 '>
                            <h2>{title}</h2>
                            <h2>{brand}</h2>
                            <h2>{price}</h2>
                            <h2>{description}</h2>
                            <h2>{stock}</h2>
                            <h2>{rating}</h2>
                            <button className="btn btn-primary">Place to Order</button>
                        </div>

                    </div>
                    <div className="w-6/12 ">
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;