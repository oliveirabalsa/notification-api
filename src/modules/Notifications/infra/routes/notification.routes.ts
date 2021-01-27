import { Router } from 'express';
import NotificationController from '../../controllers/notification.controller';

const notificationRouter = Router();

notificationRouter.get('/', NotificationController.findAll);
notificationRouter.post('/', NotificationController.create);
notificationRouter.delete('/:id', NotificationController.destroy);
notificationRouter.put('/:id', NotificationController.update);

export default notificationRouter;
