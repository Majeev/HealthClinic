import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customers.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private readonly customersRepository: Repository<Customer>,
  ) {}

  async getAllCustomers() {
    return await this.customersRepository.find();
  }

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      const customers = this.customersRepository.create(createCustomerDto);
      return await this.customersRepository.save(customers);
    } catch (error) {
      throw new BadRequestException(
        `Could not create requested customer entity`,
        {
          cause: error,
        },
      );
    }
  }

  async getCustomerById(id: number) {
    try {
      return await this.customersRepository.findOneByOrFail({ id });
    } catch (error) {
      throw new NotFoundException('Customer not found', { cause: error });
    }
  }

  async updateCustomerById(id: number, updateCustomerDto: UpdateCustomerDto) {
    await this.customersRepository.update(id, updateCustomerDto);
    return { ...updateCustomerDto, id };
  }
}
