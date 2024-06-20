import { Schema, model } from 'mongoose';
import { TBooking } from './booking.interface';
import { BookingStatus } from './booking.constant';

const bookingSchema = new Schema<TBooking>({
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  facility: { type: Schema.Types.ObjectId, ref: 'Facility', required: true },
  payableAmount: { type: Number, required: true },
  isBooked: { type: String, enum: BookingStatus, default: 'confirmed' },
});

export const Booking = model<TBooking>('Booking', bookingSchema);