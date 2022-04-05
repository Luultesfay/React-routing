import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const DUMMYDATA = [
    {
      id: 1,
      title: "My first book",
      price: 5,
      description: "the firstbook i wrote",
    },
    {
      id: 2,
      title: "My 2nd book",
      price: 13,
      description: "the second book i wrote",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMYDATA.map((data) => (
          <ProductItem
            key={data.id}
            id={data.id}
            title={data.title}
            price={data.price}
            description={data.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
