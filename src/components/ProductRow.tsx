import { ProductType } from "../mockData";
import "./styles.css";

type Props = {
  product: ProductType;
}

const ProductRow = ({ product }: Props) => {
  return (
    <tr className="row">
      <th>
        <div className="description">
          <div>Brand : {product.brand}</div>
          <div>Title : {product.title}</div>
          <div>Price :{product.price}</div>
        </div>
      </th>
      <th>
        <img src={product.images[0]} alt="img" className="img"/>
      </th>
    </tr>
  );
};

export default ProductRow;
