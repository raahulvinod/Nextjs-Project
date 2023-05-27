import mongoose from 'mongoose';

let isConnected = false; //track the connection

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);
};

if (isConnected) {
  console.log('MongoDb is already connected');
}

try {
  await mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'shared_prompt',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  isConnected = true;

  console.log('MongoDB connected');
} catch (error) {
  console.log(error);
}
