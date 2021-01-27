import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { INotification } from '../infra/@types/INotification';
import NotificationService from '../services/notification.service';

class NotificationController {
  public async findAll(req: Request, res: Response) {
    const notificationService = container.resolve(NotificationService);

    const notification = await notificationService.findAll();
    return res.status(200).json(notification);
  }

  public async create(req: Request, res: Response) {
    const notificationService = container.resolve(NotificationService);
    const { name, type, flow }: INotification = req.body;
    const createdNotification = await notificationService.create({ name, type, flow });
    return res.status(201).json(createdNotification);
  }

  public async update(req: Request, res: Response) {
    const { name, type, flow }: INotification = req.body;
    const { id } = req.params;
    const notificationService = container.resolve(NotificationService);
    const createdNotification = await notificationService.update({ name, type, flow }, id);
    return res.status(200).json(createdNotification);
  }

  public async destroy(req: Request, res: Response) {
    const { id } = req.params;
    const notificationService = container.resolve(NotificationService);
    await notificationService.destroy(id);
    return res.status(204).json({});
  }
}

export default new NotificationController();
