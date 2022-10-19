import { IsNotEmpty, IsUUID, Length } from "class-validator";

export class CreatePostDto {

  @IsUUID()
  userId: string;

  @Length(3, 60)
  title: string;

  @IsNotEmpty()
  text: string;
}
