import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Application Level Pipes... whenever a validation decorator found, run the validation
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
