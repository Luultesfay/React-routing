import { useParams } from "react-router-dom";
const ProductDetail = () => {
  const parmas = useParams(); //return object in the form of key and value the key is the danamic segment (/:)any thing after this
  return (
    <section>
      <h1>product-Detail</h1>
      <p1>{parmas.productId}</p1>
    </section>
  );
};
export default ProductDetail;
