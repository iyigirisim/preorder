import React, { useState } from 'react';

const product = {
    id: 1,
    name: "Windbreaker 10",
    slug: "windbreaker-10",
    image: "/img/about-img1.jpg",
    description: "Modern ve minimalist bir estetik anlayışla tasarlanan yaşam alanlarımız, geniş cam yüzeyleri ve ahşap dokular sayesinde doğanın güzelliklerini iç mekana taşır.",
    description2: "Güneş panelleri ve yüksek yalıtım özellikleriyle enerji ihtiyacınızı minimuma indirerek doğayla dost bir yaşam sürmenize imkan tanır.",
    technical: {
        length: "10 m",
        width: "5 m",
        height: "3 m",
        weight: "10 ton",
        power: "10 kW",
        capacity: "10 kWh",
    },
}




export default function ProductDetails() {
    const [actCount, setActCount] = useState(1);

    const increment = () => {
        setActCount(actCount + 1);
    }

    const decrement = () => { 
        if (actCount > 1) {
            setActCount(actCount - 1);
        }
    }


    return (

        <div className="product-background">
            <a className='back-button' href='/product' ><img className="back-button-icon" src='/img/icons/back.svg'/></a>

            <div className="product-container">
                <div className="image-container">
                    <a href="#"> <img className="product-image-preview" src={product.image} alt={product.name} /> </a>
                    <a href="#"> <img className="product-image-preview" src={product.image} alt={product.name} /> </a>
                    <a href="#"> <img className="product-image-preview" src={product.image} alt={product.name} /> </a>
                </div>
                <div className="big-image-container">
                    <div className="zoom-button">
                        <img className="zoom-icon" src="/img/icons/search.svg" />
                    </div>
                    <img className="product-image" src={product.image} alt={product.name} />
                </div>
                

                

                <div className="product-details">
                    <h4 className="product-name">{product.name} </h4>
                    <h6 className="product-price">{product.price}450<span className="product-price-tag">$</span></h6>

                    <p className="product-description">{product.description} </p>
                    <p className="product-description">{product.description2} </p>
                   
                    <div className="product-cta-container">

                    <div className="atc-counter">
                        <input className="atc-count-input" type="number"  value={actCount} />
                        <div className="atc-count-buttons">
                            <button className="atc-count-button" onClick={increment}><img className="counter-svg" src="/img/icons/incrementor.svg" /></button>
                            <button className="atc-count-button" onClick={decrement}><img className="counter-svg" src="/img/icons/decrementor.svg" /></button>
                        </div>
                    </div>
                    <button className="atc-button">
                        Add to Cart
                    </button>

                </div>
                </div>

                
            </div>



        </div>



    );

}

