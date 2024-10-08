import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://lucasterra:Nov%40$enh%403@cluster0.1luq3.mongodb.net/Render`);
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
    }
};

connectDB();

export default mongoose;
