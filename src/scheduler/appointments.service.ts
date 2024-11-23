import { Injectable } from '@nestjs/common';
import { Appointment } from '../scheduler/appointments.entity';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AppointmentsService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentsRepository: Repository<Appointment>) {
  }
  async create() {
    const appointment = this.appointmentsRepository.create();

    return await this.appointmentsRepository.save(appointment);
  }
  async index() {
    return await this.appointmentsRepository.find();
  }
}
