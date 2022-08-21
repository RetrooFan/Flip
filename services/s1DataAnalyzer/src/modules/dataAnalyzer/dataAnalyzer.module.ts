import { Module } from '@nestjs/common';
import { CronModule } from '../cron/cron.module';
import { DataAnalyzerService } from './dataAnalyzer.service';

@Module({
  imports: [CronModule],
  providers: [DataAnalyzerService],
})
export class DataAnalyzerModule {}
