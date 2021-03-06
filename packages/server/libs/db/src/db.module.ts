import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Episode } from './models/episode.model';

const models = TypegooseModule.forFeature([User, Course, Episode]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://root:123456@localhost:27017/wisdomstack',
      {},
    ),
    // TypegooseModule.forRoot('mongodb://localhost:27017/wisdomstack', {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    //   useFindAndMod: false,
    // }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
