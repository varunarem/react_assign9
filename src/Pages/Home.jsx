import React from 'react';

const Home = () => {
    return (
        <>
        <div className='hero container'>
            <div className='hero-content'>

                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES. </p>
                <div className='hero-btn'>
                    <button>Shop Now</button>
                    <button className='secondary-btn'>Category</button>
                </div>
                <div className='shopping'>
                    <p>Also Available On</p>
                    <div className='logos'>
                        <img src='/Images/flipkart_logo.jpg' alt='flipkart-logo' />
                        <img src='/Images/amazon_logo.png' alt='amazon-logo' />
                    </div>
                </div>
            </div>
            <div className='hero-image'>
                <img src='/Images/nike_shoe.png' alt='nike-shoe' />
            </div>
        </div>
        </>
    );
};

export default Home;



