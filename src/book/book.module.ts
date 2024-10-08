import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/schemas/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BookController],
  providers: [
    BookService,
    {
      provide: getModelToken(Book.name),
      useValue: new Book(),
    },
  ],
})
export class BookModule {}
