import User from '@/models/user';
import bcryptjs from 'bcryptjs';
import Connection from '@/database/config';

Connection();

export const POST = async (NextRequest) => {
  try {
    const body = await NextRequest.json();

    const { name, username, password } = body;

    if (!name || !username || !password) {
      return new Response('name, username and password required', {
        status: 401,
      });
    }

    const user = await User.findOne({ username });
    if (user) {
      return new Response('username already exist', { status: 400 });
    }

    const salt = await bcryptjs.genSalt(12);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = new User({
      name,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    return new Response('account created successfully', { status: 200 });
  } catch (error) {
    //FIXME: use toast for alert
    // alert(error.message);
    console.log(error)
  }
};


