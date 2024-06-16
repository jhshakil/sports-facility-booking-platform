import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { FacilityServices } from './facility.service';

const createFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.createFacilityIntoDB(req.body);

  sendResponse(res, {
    message: 'Facility added successfully',
    data: result,
  });
});

const updateFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.updateFacilityFromDB(
    req.params.id,
    req.body,
  );

  sendResponse(res, {
    message: 'Facility updated successfully',
    data: result,
  });
});

const deleteFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.deleteFacilityFromDB(req.params.id);

  sendResponse(res, {
    message: 'Facility updated successfully',
    data: result,
  });
});

const getAllFacility = catchAsync(async (req, res) => {
  const result = await FacilityServices.getAllFacilityFromDB();

  sendResponse(res, {
    message: 'Facilities retrieved successfully',
    data: result,
  });
});

export const FacilityControllers = {
  createFacility,
  updateFacility,
  deleteFacility,
  getAllFacility,
};
