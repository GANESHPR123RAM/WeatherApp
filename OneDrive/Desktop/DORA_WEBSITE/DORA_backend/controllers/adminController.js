const User = require('../model/user-model');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 });
        console.log(users);
        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No Users Found" });
        }
        return res.status(200).json(users)
    } catch (error) {
        next(error);
    }

}

const getUserById = async (req, res) => {

    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        return res.status(200).json(data);
    } catch (error) {
        next(error);
    }
}

const updatUserById = async (req, res) => {
    try {

        const id = req.params.id;
        const updateUserData = req.body;
        const updatedData = await User.updateOne({ _id: id }, {
            $set:updateUserData,
        })
        return res.status(200).json(updatedData)

    } catch (error) {
        next(error)
    }
}


const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });
        return res.status(200).json({ message: "User Deleted Successfuly" });
    } catch (error) {
        next(error);
    }
}

module.exports = { getAllUsers,deleteUserById, getUserById, updatUserById};