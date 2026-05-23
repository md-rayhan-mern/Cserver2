import User from "../../model/user/user.js"
export const getUserService = async () => {
    const user = await User.find().select('-passwordConfirm');
    return user;
};

export const getUserById = async (id) => {
    const user = await User.findById(id).select('-passwordConfirm');
    return user;
}