import User from "../../model/user/user.js";

export const newUserService = async (user) => {
  const userObject = new User(user);
  const savedUser = await userObject.save();
  return savedUser;
};

