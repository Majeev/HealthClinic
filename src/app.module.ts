import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { AppointmentsController } from './appointments/appointments.controller';
import { AppointmentsService } from './appointments/appointments.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    SchedulerModule,
  ],
  controllers: [AppController, AppointmentsController],
  providers: [AppService, AppointmentsService],
})
export class AppModule {}
