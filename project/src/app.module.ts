import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import DatabaseModule from './modules/database.module';
import ManagementModule from './modules/management.module';

@Module({
  imports: [DatabaseModule,ManagementModule],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

