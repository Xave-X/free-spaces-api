import { Module } from '@nestjs/common';
import { PlacesController } from './places.controller';
import { PlacesService } from './places.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // DD added 23/04/2026
import { Place } from './place.entity'; // DD added 23/04/2026

@Module({
  imports: [TypeOrmModule.forFeature([Place])], // DD added 23/04/2026
  controllers: [PlacesController],
  providers: [PlacesService]
})
export class PlacesModule {}
