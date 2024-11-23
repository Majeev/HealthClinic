import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get()
  index() {
    return this.appointmentsService.index();
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }
}
