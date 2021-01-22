import { Router } from 'express';

import notificationRouter from '../../../../modules/Notifications/infra/routes/notification.routes';

const routes = Router();

routes.use('/notification', notificationRouter);

export default routes;
