import { Module } from '@nestjs/common';
import { AppointmentsController } from "../appointments/appointments.controller";
import { AppointmentsService } from "../appointments/appointments.service";

@Module({
  controllers: [AppointmentsController],
  // providers: [AppointmentsService]

})
export class SchedulerModule {}
