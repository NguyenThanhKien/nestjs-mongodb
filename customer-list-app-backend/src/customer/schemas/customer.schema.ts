import * as mongoose from 'mongoose';

//tạo lược đồ cơ sở dữ liệu, mongose sẽ xác định dữ liệu được lư trữ trong csdl
export const CustomerSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    phone: String,
    address: String,
    description: String,
    created_at: { type: Date, default: Date.now }
})