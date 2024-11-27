import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity("appointments")
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column({ type: 'text', unique:true})
  phone_number: string;
}
