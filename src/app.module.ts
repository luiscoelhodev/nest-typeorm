import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, ProfilesModule, PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
