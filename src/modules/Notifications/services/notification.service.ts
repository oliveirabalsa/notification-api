import { getMongoRepository } from 'typeorm';
import Notification from '../infra/typeorm/entities/Notification.model';
import { INotification } from '../infra/@types/INotification';

class NotificationService {
  public async list(): Promise<Notification[]> {
    const notificationRepository = getMongoRepository(Notification);
    return await notificationRepository.find();
  }

  public async create(notification: INotification): Promise<Notification> {
    const notificationRepository = getMongoRepository(Notification);

    return await notificationRepository.save(notification);
  }
}

export default new NotificationService();
