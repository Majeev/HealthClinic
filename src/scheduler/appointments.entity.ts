import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column()
  // startDate: Date;
  //
  // @Column()
  // endDate: Date;

  @Column({type: 'text', nullable:true})
  phone_number: string;
}
