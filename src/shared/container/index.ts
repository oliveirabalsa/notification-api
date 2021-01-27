import { container } from 'tsyringe';
import NotificationRepository from '../../modules/Notifications/infra/typeorm/repositories/notification.repository';

container.registerSingleton('NotificationRepository', NotificationRepository);
