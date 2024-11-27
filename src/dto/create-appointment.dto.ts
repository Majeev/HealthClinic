import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateAppointmentDto {

  @IsNotEmpty()
  @IsDateString()
  start_date: string;

  @IsNotEmpty()
  @IsDateString()
  end_date: string;

  @IsNotEmpty()
  phone_number: string;
}