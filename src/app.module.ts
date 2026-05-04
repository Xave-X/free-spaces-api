import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlacesModule } from './places/places.module';
import { TypeOrmModule } from '@nestjs/typeorm'; // DD added 20/04/2026 as I set up database

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost', // DD changed from localhost 04/05/2026 whilst setting up Docker Compose
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASSWORD || 'postgres',
      database: process.env.DB_NAME || 'free_spaces',
      retryAttempts: 10, // DD try to connect to the database 10 times
      retryDelay: 3000,  // DD wait 3 second between attempts
      autoLoadEntities: true,
      synchronize: true,
    }), // DD added TypeOrmModule to imports on 20/04/2026 while setting up database
    PlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
