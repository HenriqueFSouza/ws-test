
export const brandsList: Record<number, string> = {
  1: "Toyota",
  2: "Volkswagen",
  3: "Ford",
  4: "Chevrolet",
  5: "Honda",
  6: "Hyundai",
  7: "Fiat",
  8: "Renault",
  9: "Nissan",
  10: "Jeep",
};

export const getBrandName = (brandId: number): string => {
  return brandsList[brandId] || "Unknown Brand";
};