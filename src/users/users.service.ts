import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import dataSource from 'db/data-source';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
  
    return this.usersRepository.save(user)
  }

  async findAll() {
    const users = await this.usersRepository.find()
    return users;
  }

  findOne(id: string) {
    const user = this.usersRepository.findOneBy({ id })
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id })
    return this.usersRepository.save({...user, ...updateUserDto})
    
  }

  async remove(id: string) {
    const user = await this.usersRepository.findOneBy({ id })
    return this.usersRepository.remove(user)
  }
}
