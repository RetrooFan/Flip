import { ConsoleLogger, MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerMiddleware } from '../../../shared/src/middlewares/logger.middleware';
import { HelloModule } from '../../../shared/src/modules/hello/hello.module';
import configuration from './configuration';
import { DataAnalyzerModule } from './modules/dataAnalyzer/dataAnalyzer.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), HelloModule, DataAnalyzerModule],
  providers: [ConsoleLogger],
})
export class AppModule {
  // eslint-disable-next-line class-methods-use-this
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(...LoggerMiddleware.routes);
  }
}
