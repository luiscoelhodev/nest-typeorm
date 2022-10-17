import { Profile } from "src/profiles/entities/profile.entity";
import { Post } from "src/posts/entities/post.entity"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Role } from "src/roles/entities/role.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column({ default: false })
  active: boolean

  @CreateDateColumn({ name: 'created_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
  updatedAt: Date;

  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @ManyToMany(() => Role, role => role.users)
  roles: Role[]
}
