import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from 'src/profiles/entities/profile.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>,
              @InjectRepository(Profile) private profilesRepository: Repository<Profile>) { }

  async create(createUserDto: CreateUserDto) {

    const user = this.usersRepository.create({ 
      name: createUserDto.name, 
      email: createUserDto.email, 
      active: createUserDto.active });
    await this.usersRepository.save(user);

    const profile = this.profilesRepository.create({ gender: createUserDto.gender })
    profile.user = user
    await this.profilesRepository.save(profile)

    return { message: 'User created successfully!' }
  }

  async findAll() {
    const users = await this.usersRepository.find()
    return users;
  }

  findOne(id: string) {
    const user = this.usersRepository.findOne({where: { id }, relations: ['profile']})
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id })
    this.usersRepository.merge(user, updateUserDto)
    
    return await this.usersRepository.save(user)
    // return this.usersRepository.save({ ...user, ...updateUserDto })

  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ id })
    return this.usersRepository.remove(user)
  }
}
