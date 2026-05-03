import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { TypeOrmModule } from '@nestjs/typeorm'; // DD added 20/04/2026 as I set up database

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'free_spaces',
      autoLoadEntities: true,
      synchronize: true,
    }), // DD added TypeOrmModule to imports on 20/04/2026 while setting up database
    PlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
