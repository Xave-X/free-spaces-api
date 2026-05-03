// DD Commented out 12:34 17/04/2026
// import { Controller } from '@nestjs/common';

// @Controller('places')
// export class PlacesController {}


import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Get()
  getPlaces() {
    // return this.placesService.getPlaces();
    return this.placesService.findAll(); // DD above was replaced as hardcoded values in service were removed in favour of using database 27/04/2026
  }

  @Get(':id')
  getPlace(@Param('id') id: string) {
    return this.placesService.findOne(Number(id));
  }

  // @Post()
  // createPlace(@Body() createPlaceDto: CreatePlaceDto) {
  //   return this.placesService.createPlace(createPlaceDto);
  // } // DD 27/04/2026 replaced as hardcoded value in service were removed
  @Post()
  createPlace(@Body() dto: CreatePlaceDto) {
    return this.placesService.create(dto);
  }

  @Put(':id')
  updatePlace(@Param('id') id: string, @Body() dto: UpdatePlaceDto) {
    return this.placesService.update(Number(id), dto);
  }

  @Delete(':id')
  removePlace(@Param('id') id: string) {
    return this.placesService.remove(Number(id));
  }

}
