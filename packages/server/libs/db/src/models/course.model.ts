import { modelOptions, prop, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Episode } from './episode.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Course {
  @ApiProperty({ description: '课程名称' })
  @prop({ required: true, unique: true })
  title: string;

  @ApiProperty({ description: '课程简介' })
  @prop()
  description: string;

  @ApiProperty({ description: '课程图片' })
  @prop()
  cover: string;

  // @ApiProperty({ description: '关联课时' })
  @prop({ ref: () => Episode })
  episodes: Episode[];

  // @arrayProp({ itemsRef: Episode })
  // // episodes: Ref<Episode>[];
}
