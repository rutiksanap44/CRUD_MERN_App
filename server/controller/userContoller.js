import User from "../schema/user-schema.js"

export const addUser = async (request, response) => {
    const user = request.body
    const newUser = new User(user)

    try {
        await newUser.save()
        response.status(201).json(newUser)
    } catch (error) {
        response.status(409).json({ message: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id)
        res.status(200).json(users)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const editUser = async (req, res) => {
    let user = req.body;
    const editUser = new User(user)
    try {
        await User.updateOne({ _id: req.params.id}, editUser)
        res.status(201).json(editUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

