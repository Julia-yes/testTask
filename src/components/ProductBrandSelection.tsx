type ProductBrandSelectionProps = {
  selectedBrand: string | undefined;
  selectBrand: (type: string | undefined) => void;
  brands: string[];
};
export const ProductBrandSelection = ({
  selectedBrand,
  selectBrand,
  brands,
}: ProductBrandSelectionProps) => {
  return (
    <select
      className="input"
      onChange={(e) => {
        selectBrand(e.currentTarget.value);
      }}
      value={selectedBrand}
    >
      {brands.map((item) => (
        <option>{item}</option>
      ))}
    </select>
  );
};
