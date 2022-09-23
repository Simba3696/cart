import bagImg from "./img/bag.png";
import notebookImg from "./img/notebook.png";
import sanitizerImg from "./img/sanitizer.png";

const data = {
  /**
   * Product Data
   * To add a product listing, add the following properties
   * @property id - Id to uniquely identify the product
   * @property title - Name of product
   * @property desc - Description
   * @property price - Price
   * @property minQuantity - Minimum Quantity to be purchased
   * @property maxQuantity - Maximum Quantity that can be purchased
   */
  productData: [
    {
      id: 1,
      title: "Notebook",
      desc: "Minimum Quantity: 3",
      img: notebookImg,
      price: 100,
      minQuantity: 3,
      maxQuantity: 100,
    },
    {
      id: 2,
      title: "Sanitizer",
      desc: "Minimum Quantity: 10",
      img: sanitizerImg,
      price: 250,
      minQuantity: 10,
      maxQuantity: 100,
    },
    {
      id: 3,
      title: "Bag",
      desc: "Maximum Quantity: 2",
      img: bagImg,
      price: 1500,
      minQuantity: 0,
      maxQuantity: 2,
    },
  ],
  /**
   * Discount
   * To provide discounts for a product, add the following properties
   * @property id - Unique product id
   * @property discount - If the product has a discount or not
   * @property percentDiscount - If the discount is percentage based or not (Flat discount or Percentage Discount)
   * @property minAmount - Mimimum amount for discount to be applied
   * @property value - Discount value
   * @property maxAmount - Maximum discount amount that can be applied
   */
  discountData: [
    {
      id: 1,
      discount: true,
      percentDiscount: true,
      minAmount: 500,
      value: 10,
      maxAmount: 60,
    },
    {
      id: 2,
      discount: true,
      percentDiscount: false,
      minAmount: 3000,
      value: 100,
      maxAmount: 100,
    },
    {
      id: 3,
      discount: false,
      percentDiscount: false,
      minAmount: 0,
      value: 0,
      maxAmount: 0,
    },
  ],
  /**
   * Promocodes
   * To add a promocode, add the following properties
   * @property code - Promocode
   * @property value - Discount value
   * @property minAmount - Minimum amount for discount to be applied
   */
  promoCode: [
    {
      code: "PRIME123",
      value: 123,
      minAmount: 10000,
    },
  ],
};

export default data;
