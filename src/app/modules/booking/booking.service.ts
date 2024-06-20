import { TBooking } from './booking.interface';
import { Booking } from './booking.model';
import { Facility } from '../facility/facility.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';

const createBookingIntoDB = async (payload: TBooking, user: string) => {
  const mainData = payload;
  const userData = await User.findOne({ email: user });

  if (!userData) throw new AppError(httpStatus.NOT_FOUND, 'User not found');

  mainData.user = userData.id;

  const id = payload.facility;
  const facility = await Facility.findById(id);

  if (!facility)
    throw new AppError(httpStatus.NOT_FOUND, 'This facility is not found!');

  const payableAmount =
    ((new Date(`1970-01-01T${payload.endTime}:00`).getTime() / 1000 -
      new Date(`1970-01-01T${payload.startTime}:00`).getTime() / 1000) /
      3600) *
    facility.pricePerHour;

  mainData.payableAmount = payableAmount;

  const result = await Booking.create(mainData);
  return result;
};

export const BookingServices = {
  createBookingIntoDB,
};
