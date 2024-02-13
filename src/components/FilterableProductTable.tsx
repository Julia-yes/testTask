import { useEffect, useState } from "react";
import { ProductType, mockData } from "../mockData";
import { ProductBrandSelection } from "./ProductBrandSelection";
import { ProductTable } from "./ProductTable";

export const FilterableProductTable = () => {
  const [data, setData] = useState<ProductType[]>(mockData);
  const [value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setData(data.products));
  }, []);

  const handleClick = (val: string | undefined) => {
    setValue(val);
  };

  const filteredData = value
    ? data.filter((item) => item.brand.toLowerCase().includes(value.toLowerCase()))
    : data;

  const brands = new Set<string>();

  data.map((item) => brands.add(item.brand));

  return (
    <div className="page">
      <ProductBrandSelection selectedBrand={value} selectBrand={handleClick} brands={Array.from(brands)} />
      <ProductTable products={filteredData} />
    </div>
  );
};
