import { IService } from './IService';
import { IUser } from './User';

export interface ISchedule {
  id: number;
  data_hora: string;
  usuario: IUser;
  servico: IService;
}
