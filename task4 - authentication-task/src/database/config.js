import mongoose from 'mongoose';

async function Connection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, { useUnifiedTopology: true });
  } catch (error) {
    // FIXME: use toast for alert
    console.log(error.message);
  }
}


export default Connection;