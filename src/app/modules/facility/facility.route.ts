import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { FacilityValidations } from './facility.validation';
import { FacilityControllers } from './facility.controller';
import { USER_ROLE } from '../user/user.constant';
import auth from '../../middlewares/auth';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(FacilityValidations.createFacilityValidation),
  FacilityControllers.createFacility,
);

export const FacilityRoutes = router;
