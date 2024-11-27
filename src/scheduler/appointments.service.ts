import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Appointment } from '../scheduler/appointments.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';
import { UpdateAppointmentDto } from '../dto/update-appointment.dto';

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>,
  ) {}

  async create(createAppointmentDto: CreateAppointmentDto) {
    const { start_date, end_date, phone_number } = createAppointmentDto;

    if (new Date(start_date) > new Date(end_date)) {
      throw new UnprocessableEntityException(
        'Start date must be before end date',
      );
    }
    try {
      const appointments = this.appointmentsRepository.create({
        start_date: start_date,
        end_date: end_date,
        phone_number,
      });

      return await this.appointmentsRepository.save(appointments);
    } catch (error) {
      throw new BadRequestException(
        `"start_date", "end_date" and "phone_number" are required`,
        {
          cause: error,
        },
      );
    }
  }

  async getAllAppointments() {
    return await this.appointmentsRepository.find();
  }

  async getAppointmentById(id: number) {
    return await this.appointmentsRepository.findOneByOrFail({ id });
  }

  async updateAppointmentById(
    id: number,
    updateAppointmentDto: UpdateAppointmentDto,
  ) {
    await this.appointmentsRepository.update(id, updateAppointmentDto);
    return { ...updateAppointmentDto, id };
  }

  removeAppointmentById(id: number) {
    this.appointmentsRepository.delete(id);
  }
}
