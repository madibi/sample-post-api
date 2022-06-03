
import { Entity, Column,
  PrimaryGeneratedColumn,
  BaseEntity,
} from 'typeorm';

@Entity({ name: 'Post' })
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number; 

  @Column({ nullable: true })
  title: string; 

  @Column({ nullable: true })
  body: string; 
}
