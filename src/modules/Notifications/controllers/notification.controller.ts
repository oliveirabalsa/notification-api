import { Request, Response } from 'express';
import notificationService from '../services/notification.service';
import { INotification } from '../infra/@types/INotification';

class NotificationController {
  public async list(req: Request, res: Response) {
    const notification = await notificationService.list();
    return res.status(200).json(notification);
  }

  public async create(req: Request, res: Response) {
    const { name, type, flow }: INotification = req.body;
    const createdNotification = await notificationService.create({ name, type, flow });
    return res.status(200).json(createdNotification);
  }
}

export default new NotificationController();
