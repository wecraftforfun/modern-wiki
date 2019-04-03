/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";

import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`api`);

  /**
   * * Middlewares
   */
  app.use(helmet());
  app.use(csurf());
  app.use(compression());
  app.enableCors();
  /**
   * * Bootstrapping app
   */
  const port = process.env.port || 3333;
  await app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
  });
}

bootstrap();
