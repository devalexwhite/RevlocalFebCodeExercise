const PRICE_PER_PRODUCT = 299;
const DISCOUNT_MAP = {
  1: 0,
  2: 0.05,
  3: 0.1,
  4: 0.2,
  5: 0.25,
};

// Runtime: O(nlogn + n + n) = O(nlogn) where n is productArray.length
// Space: O(n)
//
// Assumptions:
// 1. Output format is a String with leading dollar sign and 2 digits after decimal
// 2. 0 <= N <= 2^32 where N is productArray.length
// 3. 0 < productArray[X].length <= 2^53
// 4. The array is NOT sorted
// 5. We can modify the productArray in place
const computeTotalPrice = (productArray = [], discountMap = DISCOUNT_MAP) => {
  let sets = [],
    lastProduct = null,
    i,
    price = 0;

  if (!productArray.length) return "$0.00";

  // Javascript relies on merge sort, O(nlogn)
  productArray.sort();

  // O(n)
  for (let product of productArray) {
    if (product == lastProduct) {
      i++;
    } else {
      i = 0;
      lastProduct = product;
    }

    sets[i] = sets[i] ? sets[i] + 1 : 1;
  }

  // O(n)
  for (let set of sets) {
    price += set * PRICE_PER_PRODUCT * (1 - discountMap[set]);
  }

  return `$${price.toFixed(2)}`;
};

module.exports = {
  computeTotalPrice,
};
