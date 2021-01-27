import { getRepository, Repository } from 'typeorm';
import { INotification } from '../../@types/INotification';
import Notification from '../entities/Notification.model';

class NotificationRepository {
    private ormRepository: Repository<Notification>

    constructor() {
      this.ormRepository = getRepository(Notification);
    }

    public async create({ name, type, flow }: INotification) {
      const notification = await this.ormRepository.create({
        name,
        type,
        flow,
      });
      return await this.ormRepository.save(notification);
    }

    public async findAll() {
      return await this.ormRepository.find();
    }

    public async update({ name, type, flow }: INotification, id: string) {
      const notification = await this.ormRepository.findOne(id);
      return await this.ormRepository.save({
        ...notification, name, type, flow,
      });
    }

    public async destroy(id: string) {
      const notification = await this.ormRepository.findOne(id);
      return await this.ormRepository.remove(notification);
    }
}

export default NotificationRepository;
