// Interface
// type of interface

interface ProductInfo {
  readonly id: number | string | boolean; //this is known as union type '|'
  name: string;
  price: number;
  brand: string;
  Discount?: number;
}
// you can reopen the interface and add some more properties
// ager type alias me hum reopen karte hai to error dega but interface me nhi dega
// interface me reopen karne se error nhi dega
// like this
// so  the total properties of this interface is 7
interface ProductInfo {
  gst: number;
  review: string;
}

interface ProductInventory extends ProductInfo {
  stock: number;
  category: string;
  quantity: number;
}

var productDetails: ProductInventory = {
  id: 1,
  name: "John",
  price: 1000,
  brand: "logitech",
  Discount: 10,
  stock: 343,
  category: "sdfg",
  quantity: 100,
  gst: 18,
  review: "good",
};

console.log(productDetails);
