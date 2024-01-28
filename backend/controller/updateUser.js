import User from '../models/User.js';
import mongoose from 'mongoose';

async function updateUser(req, res) {
   const id = mongoose.Types.ObjectId(req.params.id);

   if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({
         message: 'Invalid user ID'
      });
   }

   try {
      const user = await User.findByIdAndUpdate(id, req.body, { new: true });

      if (user) {
         return res.status(200).json({
            message: 'User updated successfully',
            user: user
         });
      }

      return res.status(404).json({
         message: 'User not found'
      });
   } catch (error) {
      return res.status(500).json({
         error: 'Internal server error'
      });
   }
}

export default updateUser;