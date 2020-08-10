import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Customer } from './interfaces/customer.interface';
import { CreateCustomerDTO } from './dto/create-customer.dto';


@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly customerModel: Model<Customer>) { }

    // fetch all customers (lấy tất cả)
    async getAllCustomer(): Promise<Customer[]> {
        const customers = await this.customerModel.find().exec();
        return customers;
    }

    // Get a single customer(lấy 1 theo id)
    async getCustomer(customerID): Promise<Customer> {
        const customer = await this.customerModel.findById(customerID).exec();
        return customer;
    }

    // post a single customer(thêm 1)
    async addCustomer(createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const newCustomer = await this.customerModel(createCustomerDTO);
        return newCustomer.save();
    }

    // Edit customer details(sửa 1)
    async updateCustomer(customerID, createCustomerDTO: CreateCustomerDTO): Promise<Customer> {
        const updatedCustomer = await this.customerModel
            .findByIdAndUpdate(customerID, createCustomerDTO, { new: true });
        return updatedCustomer;
    }

    // Delete a customer(xóa 1)
    async deleteCustomer(customerID): Promise<any> {
        const deletedCustomer = await this.customerModel.findByIdAndRemove(customerID);
        return deletedCustomer;
    }

}
