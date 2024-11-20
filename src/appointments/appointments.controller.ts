import { Controller, Get } from "@nestjs/common";
import { appointments } from "../appointments/appointments"

@Controller('appointments')
export class AppointmentsController {

    @Get()
    index() {
      return appointments
    }
}
