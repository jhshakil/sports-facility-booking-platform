import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AvailabilityServices } from './availability.service';

const checkAvailability = catchAsync(async (req, res) => {
  const result = await AvailabilityServices.checkingAvailability();

  sendResponse(res, {
    message: 'Availability checked successfully',
    data: result,
  });
});

export const AvailabilityControllers = {
  checkAvailability,
};
