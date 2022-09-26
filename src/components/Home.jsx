import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div>
            <div className="card text-white bg-dark border-0">
                <img src="/assets/new_designs1.webp" className="card-img" alt="Background" />
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                        <h5 className="card-title display-3 fw-bold mb-0" >NEW SEASON ARRIVALS</h5>
                        <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
                    </div>
                </div>
            </div>
            <Products />
        </div>
    )
}

export default Home