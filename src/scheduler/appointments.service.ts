import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Appointment } from '../scheduler/appointments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const { start_date, end_date, phone_number } = createAppointmentDto;

    if (new Date(start_date) > new Date(end_date)) {
      throw new HttpException(
        'Start date must be before end date',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const appointments = this.appointmentsRepository.create({
      start_date: new Date(start_date),
      end_date: new Date(end_date),
      phone_number,
    });

    return this.appointmentsRepository.save(appointments);
  }

  async index() {
    return await this.appointmentsRepository.find();
  }
}
