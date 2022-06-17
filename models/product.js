const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema.Types;

const productSchema = new monogose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxLength: 32,
    },
    description: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      trim: true,
      required: true,
      maxLength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      required: true,
    },

    quantity: {
      type: Number,
      default: 0,
    },
    photo: {
      type: Buffer,
      contentType: String,
    },
    shipping: { required: false, type: Boolean },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
