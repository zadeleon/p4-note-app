import User from '../models/User.js'

async function createUser(req,res)
{
     const {username,password} = req.body;
     const newUser = new User(
        {
            username,
            password,
        }
     );

     try {
        await newUser.save();
        return res.status(201).json({
            message: 'Success!'
        });
     } catch (error) {
        return res.status(400).json({ error: error.message });
     }
}

export default createUser;