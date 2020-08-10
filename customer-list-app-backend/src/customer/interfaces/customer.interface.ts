import { Document } from 'mongoose';

//kiểm tra kiểu và xác định loại giá trị sẽ được ứng dụng nhận đảm bảo tránh nhầm lẫn với thiết kế app
export interface Customer extends Document {
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly description: string;
    readonly created_at: Date;
}