import { Router } from 'express';
import NotificationController from '../../controllers/notification.controller';

const notificationRouter = Router();

notificationRouter.get('/', NotificationController.list);
notificationRouter.post('/', NotificationController.create);
// notificationRouter.delete('/', NotificationController.destroy());
// notificationRouter.put('/', NotificationController.update());

export default notificationRouter;
