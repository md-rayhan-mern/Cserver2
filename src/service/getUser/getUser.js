import User from "../../model/user/user.js"

export const getUserService = async () => {
    const user = await User.find();
    return user;
};

export const getUserById = async (id) => {
    const user = await User.findById(id);
    return user;
}

export const login = async (userData) => {
    const {email, password} = userData;
    const userEmail = await User.findOne({email: email, password: password});
    return userEmail;
    
}