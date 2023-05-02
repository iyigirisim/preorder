

const product = {
    id: 1,
    name: "Windbreaker 10",
    slug: "windbreaker-10",
    image: "/img/about-img1.jpg",
    description: "This is an example description for Windbreaker 10. This product is a windbreaker that is 10 feet long.",
    description2: "Dicta sunt explicabo. Nemo enim ipsam voluptatem voluptas sit odit aut fugit, sed quia consequuntur. Lorem ipsum nonum eirmod dolor."
}




export default function ProductDetails() {
    return (

        <div className="product-background">
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
                        <input className="atc-count-input" type="number" value={1} />
                        <div className="atc-count-buttons">
                            <button className="atc-count-button"><img className="counter-svg" src="/img/icons/incrementor.svg" /></button>
                            <button className="atc-count-button"><img className="counter-svg" src="/img/icons/decrementor.svg" /></button>
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

