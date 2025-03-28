/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './models/Products';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '',
      database: 'productsdb',
      entities: [Products]
    }),
    TypeOrmModule.forFeature([Products])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
