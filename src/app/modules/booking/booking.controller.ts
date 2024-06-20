import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const result = await BookingServices.createBookingIntoDB(
    req.body,
    req.user.email,
  );

  sendResponse(res, {
    message: 'Booking created successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
