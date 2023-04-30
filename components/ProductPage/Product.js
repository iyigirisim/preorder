import Link from "next/link";

const products = [
    {
        id: 1,
        name: "Windbreaker 10",
        slug: "windbreaker-10",
        image: "/img/about-img1.jpg",
        description: "This is an example description for Windbreaker 10. This product is a windbreaker that is 10 feet long.",
    },
    {
        id: 2,
        name: "SolarSight v2",
        slug: "solarsight-v2",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v2. This product is a solar panel that is generates electricity.",
    },
    {
        id: 3,
        name: "SolarSight v3",
        slug: "solarsight-v3",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v3. This product is a solar panel that is generates electricity.",
    },
    {
        id: 4,
        name: "SolarSight v4",
        slug: "solarsight-v4",
        image: "/img/about-img1.jpg",
        description: "This is an example description for SolarSight v4. This product is a solar panel that is generates electricity.",
    },
];

export default function Product() {



    return (
        <>
            <section className="services-wrapper fix section-padding">
                <div className="container">

                    <div className="row text-center text-lg-start">
                        {products.map((product) => (
                            <Link href={`/product/${product.slug}`} key={product.id}>
                                <div className="col-md-6 col-xl-4 col-12 hover:cursor-pointer" key={product.id}>
                                    <img src={product.image} alt={product.name} />
                                    <p>{product.description}</p>
                                </div>
                            </Link>
                        ))}


                    </div>

                </div>
            </section>


        </>
    );
}