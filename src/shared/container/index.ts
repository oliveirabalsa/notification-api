import { container } from 'tsyringe';
import NotificationRepository from '../../modules/Notifications/infra/typeorm/repositories/NotificationRepository';

container.registerSingleton('NotificationRepository', NotificationRepository);
