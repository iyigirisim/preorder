

export default function Product() {
    const product = {
        id: 1,
        name: "Selami",
        slug: "selami",
        image: "/img/about-img1.jpg",
        description: "asdasdkaskdaksd",
    };
    return (
        <>
            <section className="services-wrapper fix section-padding">
			<div className="container">
                
                <div className = "row text-center text-lg-start">
                    <div className = "col-md-6 col-xl-4 col-12" key={product.id}>
                        <img src = {product.image} alt = {product.name} />
                        <p>{product.description}</p>
                    </div>
                </div>

            </div>
            </section>
            
            
        </>
    );
}