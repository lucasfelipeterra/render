import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGODB}/${process.env.DB_NAME}`);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
    }
};

connectDB();

export default mongoose;
