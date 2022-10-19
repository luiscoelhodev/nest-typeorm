import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postsRepository: Repository<Post>,
              @InjectRepository(User) private usersRepository: Repository<User>) {}

  async create(createPostDto: CreatePostDto) {
    const user = await this.usersRepository.findOneByOrFail({ id: createPostDto.userId })

    const post = this.postsRepository.create({ title: createPostDto.title, text: createPostDto.text })
    post.user = user

    return await this.postsRepository.save(post);
  }

  findAll() {
    return `This action returns all posts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
