/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  nome_do_produto: string;

  @Column('text')
  fornecedor: string;

  @Column()
  endereco_fornecedor: string;

  @Column('int')
  quantidade: number;

  @Column()
  descricao: string;

  @Column()
  data_registro: Date;

  @Column()
  data_update: Date;
}
