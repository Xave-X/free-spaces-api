// DD file created 22/04/2026

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;
}