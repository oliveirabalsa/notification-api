import { NotificationTypeEnum } from '../enums/NotificationType.enum';

export interface INotification {
  name: string;
  type: NotificationTypeEnum;
  flow: string;
}
