import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // DD 18/04/26 added to enable global validation

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // DD 18/04/26 added to enable global validation

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
