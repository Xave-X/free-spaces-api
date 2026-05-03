// DD commented out 17/04/2026 12:52
// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PlacesService {}

import { Injectable } from '@nestjs/common';
// import { Place } from './interfaces/place.interface'; // DD replaced by place.entity 27/04/2026
import { InjectRepository } from '@nestjs/typeorm'; // DD 27/04/2026
import { Repository } from 'typeorm'; // DD 27/04/2026
import { Place } from './place.entity'; // DD 27/04/2026

// @Injectable()
// export class PlacesService {
//   private places: Place[] = [
//     { id: 1, name: 'Park' },
//     { id: 2, name: 'Library' },
//   ];

//   getPlaces(): Place[] {
//     return this.places;
//   }

//   createPlace(place: { name: string; description?: string }): Place {
//     const newPlace: Place = {
//       id: this.places.length + 1,
//       name: place.name,
//       description: place.description,
//     };

//     this.places.push(newPlace);
//     return newPlace;
//   }
// }
// DD above was replaced 27/04/2026, as this was all hard coded data not from a database
@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>,
  ) {}

  findAll(): Promise<Place[]> {
    return this.placesRepository.find();
  }

  async findOne(id: number) {
    return this.placesRepository.findOne({
      where: { id },
    });
  }

  async create(place: { name: string; description?: string }): Promise<Place> {
    const newPlace = this.placesRepository.create(place);
    return this.placesRepository.save(newPlace);
  }

  async update(id: number, data: { name?: string; description?: string }) {
    await this.placesRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.placesRepository.delete(id);
    return { message: 'Deleted successfully' };
  }
}