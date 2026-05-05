import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must required"],
      trim: true,
      maxLength: [50, "Name length must be lessthen 50 character"],
      validate: {
        validator: (value) => {
          validator.isAlpha(value, "en-US", { ignore: " " });
        },
        message: "Name cheracter must be an english",
      },
    },
    email: {
      type: String,
      required: [true, "Email must be required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Enter correct email"],
    },
    password: {
      type: String,
      required: [true, "Password must entered"],
      trim: true,
      minLength: [4, "Must be 8 charecter"],
      maxLength: [12, "Must be less then 12 charecter"],
      select: false,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Ensure usre password"],
      validate: {
        validator: function (el) {
          return el === this.password;
        },
      },
      message: "Not match second password",
    },
    image: {
      type: String,
      default: "user.jpg",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
      validate: {
        validator: (value) => validator.isMobilePhone(value, "bn-BD"),
        message: "Currect Banglades phone Number enter",
      },
    },
    address: [
      {
        street: String,
        city: String,
        state: String,
        zeepCode: String,
        country: {
          type: String,
          default: "Bangladesh",
        },
      },
    ],
    isVerify: {
      type: Boolean,
      default: false,
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpire: Date,
    active: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("User", userSchema);
