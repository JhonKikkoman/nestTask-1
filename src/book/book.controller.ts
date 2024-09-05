import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookDocument } from './entities/schemas/book.schema';
import { HydratedDocument, QueryWithHelpers } from 'mongoose';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto): Promise<BookDocument> {
    return this.bookService.createBook(createBookDto);
  }

  @Get()
  findAllBooks() {
    return this.bookService.getBooks();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookService.findBook(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() body: UpdateBookDto,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.update(id, body);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ): QueryWithHelpers<
    HydratedDocument<BookDocument, {}, {}> | null,
    HydratedDocument<BookDocument, {}, {}>,
    {},
    BookDocument
  > {
    return this.bookService.remove(id);
  }
}
