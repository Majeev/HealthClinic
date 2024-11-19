import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  providers: [],
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory(config: ConfigService): TypeOrmModuleOptions {
        return {
          type: 'postgres',
          host: config.get('DATABASE_HOST'),
          port: config.get('DATABASE_PORT'),
          username: config.get('DATABASE_USERNAME'),
          password: config.get('DATABASE_PASSWORD'),
          database: 'healthclinic_db',
          entities: [],
          synchronize: true,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
