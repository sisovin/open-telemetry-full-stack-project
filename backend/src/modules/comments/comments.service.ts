import { Injectable } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];

  create(createCommentDto: CreateCommentDto): Comment {
    const newComment = new Comment();
    newComment.id = this.comments.length + 1;
    newComment.text = createCommentDto.text;
    newComment.author = createCommentDto.author;
    this.comments.push(newComment);
    return newComment;
  }

  findAll(): Comment[] {
    return this.comments;
  }

  findOne(id: number): Comment {
    return this.comments.find(comment => comment.id === id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto): Comment {
    const comment = this.findOne(id);
    if (comment) {
      comment.text = updateCommentDto.text;
      comment.author = updateCommentDto.author;
    }
    return comment;
  }

  remove(id: number): void {
    this.comments = this.comments.filter(comment => comment.id !== id);
  }
}
