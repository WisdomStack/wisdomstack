import { modelOptions, prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class User {
  @ApiProperty({ description: '用户名', example: 'admin' })
  @prop({ required: true, unique: true })
  username: string;

  @ApiProperty({ description: '密码', example: '123456' })
  @prop()
  password: string;

  @prop()
  email: string;

  @prop()
  avatar: string;

  @prop()
  bio: string;
}
