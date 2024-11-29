import {
  IsDateString,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateAppointmentDto {
  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  middle_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsPhoneNumber()
  phone_number: string;

  @IsNotEmpty()
  @IsDateString()
  date_of_birth: Date;

  @IsNotEmpty()
  @IsString()
  country: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  zip_code: string;

  @IsNotEmpty()
  @IsString()
  address_1: string;

  @IsNotEmpty()
  @IsString()
  address_2: string;
}
