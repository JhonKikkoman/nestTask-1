import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  public id: String;
  @Prop({ required: true })
  public title: String;
  @Prop({ default: '' })
  public description: String;
  @Prop()
  public authors: String;
  @Prop()
  public favorite: String;
  @Prop()
  public fileCover: String;
  @Prop()
  public fileName: String;
}

export const BookSchema = SchemaFactory.createForClass(Book);
