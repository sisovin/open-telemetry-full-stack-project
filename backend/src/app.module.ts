import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ConfigModule } from '@nestjs/config';
import { OtelModule } from './instrumentation/otel.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    UsersModule,
    CommentsModule,
    OtelModule,
  ],
})
export class AppModule {}
