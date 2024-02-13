import { ProductType } from "../mockData";
import ProductRow from "./ProductRow";
import "./styles.css";

type Props = {
  products: ProductType[];
}

export const ProductTable = ({ products }: Props) => {
  return (
    <table>
      <tbody className="table">
        {products.map((item, index) => (
          <ProductRow product={item} key={index} />
        ))}
      </tbody>
    </table>
  );
};
