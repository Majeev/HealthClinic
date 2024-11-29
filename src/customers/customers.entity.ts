import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  first_name: string;

  @Column({ type: 'text' })
  middle_name: string;

  @Column({ type: 'text' })
  last_name: string;

  @Column({ type: 'text' })
  gender: string;

  @Column({ type: 'text' })
  email: string;

  @Column({ type: 'text' })
  phone_number: string;

  @Column({ type: 'text' })
  date_of_birth: Date;

  @Column({ type: 'text' })
  country: string;

  @Column({ type: 'text' })
  city: string;

  @Column({ type: 'text' })
  zip_code: string;

  @Column({ type: 'text' })
  address_1: string;

  @Column({ type: 'text' })
  address_2: string;
}
