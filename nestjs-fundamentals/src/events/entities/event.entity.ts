import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Event extends mongoose.Document {
  @Prop()
  type: string;

  @Prop()
  name: string;

  @Prop({ type: String, default: '' })
  payload: Record<string, string>;
}

export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ type: -1, name: 1 });
