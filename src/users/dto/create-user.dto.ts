import { IsAlpha, IsBoolean, IsEmail, IsNotEmpty } from "class-validator"

export class CreateUserDto {
  @IsAlpha()
  @IsNotEmpty()
  name: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsBoolean()
  @IsNotEmpty()
  active: boolean
}
