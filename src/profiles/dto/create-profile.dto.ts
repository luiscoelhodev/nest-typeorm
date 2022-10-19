import { IsAlpha } from "class-validator";

export class CreateProfileDto {
  
  @IsAlpha()
  gender: string;

}
