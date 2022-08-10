import useAddToCart from "../hooks/useAddToCart";
import { Product } from "../types";

interface Props {
  data: Product;
}

function SingleProduct({ data }: Props) {
  const [cart, handleAdd] = useAddToCart(["My initial val"]);

  return (
    <div className="product">
      <h2>{data.title}</h2>
      <img src={data.image} alt="decoration" />
      <p>{data.description}</p>
      <p>
        <b>$ {data.price}</b>
      </p>
      <button onClick={() => handleAdd("Dla bla")}>Add to cart</button>
    </div>
  );
}

export default SingleProduct;
