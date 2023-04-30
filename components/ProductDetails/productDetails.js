

const product= {
    id: 1,
    name: "Windbreaker 10",
    slug: "windbreaker-10",
    image: "/img/about-img1.jpg",
    description: "This is an example description for Windbreaker 10. This product is a windbreaker that is 10 feet long.",
}




export default function ProductDetails() {
    return (
        
        <div className="product-background">
            <div className="product-container">
                   <div className="image-container">
                   <a href="#"> <img className="product-image-preview" src={product.image}  alt={product.name}></img> </a>
                   <a href="#"> <img className="product-image-preview" src={product.image}  alt={product.name}></img> </a>
                   <a href="#"> <img className="product-image-preview" src={product.image}  alt={product.name}></img> </a>
                   </div>
                    <img className="product-image" src={product.image} alt={product.name} />
        

            </div>
           

        </div>
        
        
    );

}

