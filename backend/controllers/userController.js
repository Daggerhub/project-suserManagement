import User from '../model/userModel.js'

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(400).json({ success: false });
  }
  };
  
  const getUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: user });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  };
  
  const createUser = async (req, res, next) => {
    try {
      const user = await User.create(req.body);
      res.status(201).json({
        success: true,
        data: user
      });
    } catch (error) {
      res.status(400).json({ success: false });
    }  };
  
  const updateUser = async (req, res, next) => {
    try {
      const user = await User.findById(req.params.id)

      if (!user) {
        res.status(401).json({ success: false, message: "User not found" });
      }

      if(user){

        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        user.phone = req.body.phone || user.phone
      }

        const updatedUser = await user.save()
        // console.log(updatedUser)
        res.json({
          id: updatedUser.id,
          name : updatedUser.name,
          email: updatedUser.email,
          phone: updatedUser.phone
      })
    
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  };
  
  const deleteUser = async (req, res, next) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(400).json({ success: false });
      }
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      return res.status(400).json({ success: false });
    }
  };

  export {getUser, createUser , updateUser, deleteUser , getUsers}