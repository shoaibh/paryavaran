import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const ProductType = {
  Energy: {
    SolarPanel: "Solar_Panel",
    LedBulbs: "LED_Bulbs",
    RechargableBatteries: "Rechargable_Batteries",
    SolarWaterHeater: "Solar_Water_Heater",
  },
  Essentials: {
    SolarCooker: "Solar_Cooker",
    ReusableGroceryBag: "Reusable_Grocery_Bag",
    ReusableWaterBottle: "Reusable_Water_Bottle",
    CoffeeMug: "Coffee_Mug",
  },
  Others: {
    SolarCandles: "Solar_Candles",
    ShowerTimer: "Shower_Timer",
    RecycledFabricClothes: "Recycled_Fabric_Clothes",
  },
};
const prodctSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0, required: true },
  category: { type: String, required: true },
  productType: {
    type: String,
    default: ProductType.Energy.SolarPanel,
    required: true,
  },
  countInStock: { type: Number, default: 0, required: true },
  description: { type: String, required: true },
  rating: { type: Number, default: 0, required: true },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model("Product", prodctSchema);

export default productModel;
