import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Book, BookDocument } from './entities/schemas/book.schema';

@Injectable()
export class BookService {
  constructor(
    @InjectModel(Book.name) private readonly BookModel: Model<BookDocument>,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  createBook(data: CreateBookDto): Promise<BookDocument> {
    const book = new this.BookModel(data);
    return book.save();
  }

  getBooks(): Promise<BookDocument[]> {
    return this.BookModel.find().exec();
  }

  findBook(id: string): Promise<BookDocument> {
    return this.BookModel.findById({ _id: id });
  }

  update(id: string, data: UpdateBookDto) {
    return this.BookModel.findOneAndUpdate({ _id: id }, data);
  }

  remove(id: string) {
    return this.BookModel.findOneAndDelete({ _id: id });
  }
}
