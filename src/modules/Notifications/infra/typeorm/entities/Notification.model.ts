import {
  Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn, UpdateDateColumn,
} from 'typeorm';

@Entity()
class Notification {
    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    flow: string;

    @CreateDateColumn({
      name: 'created_at',
    })
    createdAt: Date;

    @UpdateDateColumn({
      name: 'updated_at',
    })
    updatedAt: Date;
}

export default Notification;
