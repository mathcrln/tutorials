import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nestjs-fundamentals'),
    CommonModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
