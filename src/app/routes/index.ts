import { Router } from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { AuthRouters } from '../modules/auth/auth.route';
import { FacilityRoutes } from '../modules/facility/facility.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/auth',
    route: AuthRouters,
  },
  {
    path: '/facility',
    route: FacilityRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
