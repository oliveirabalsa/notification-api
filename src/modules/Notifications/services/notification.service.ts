import { inject, injectable } from 'tsyringe';
import Notification from '../infra/typeorm/entities/Notification.model';
import { INotification } from '../infra/@types/INotification';

@injectable()
class NotificationService {
  constructor(
  @inject('NotificationRepository')
  private readonly notificationRepository,
  ) {}

  public async findAll(): Promise<Notification[]> {
    return await this.notificationRepository.findAll();
  }

  public async create({ name, type, flow }: INotification): Promise<Notification> {
    return await this.notificationRepository.create({ name, type, flow });
  }

  public async update({ name, type, flow }: INotification, id: string): Promise<Notification> {
    return await this.notificationRepository.update({ name, type, flow }, id);
  }

  public async destroy(id: string): Promise<Notification> {
    return await this.notificationRepository.destroy(id);
  }
}

export default NotificationService;
