import { Injectable } from '@nestjs/common';
import { appointments } from './appointments';

@Injectable()
export class AppointmentsService {
  index() {
    return appointments;
  }
}
