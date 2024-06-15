import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidations } from './facility.validation';
import { FacilityControllers } from './facility.controller';

const router = Router();

router.post(
  '/',
  validateRequest(FacilityValidations.createFacilityValidation),
  FacilityControllers.createFacility,
);

export const FacilityRoutes = router;
