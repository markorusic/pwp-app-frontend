import { User } from './user'

export class Ad {
  id: number;
  title: string;
  description: string;
  price: number;
  created_at: string;
  user: User;
}
