import MongoDb from '@/lib/mongodb.mjs';

const handler = async (req, res) => {
    try {
        // await MongoDb();
        res.status(200).json({ message: 'Database connected successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
};

export default handler;
