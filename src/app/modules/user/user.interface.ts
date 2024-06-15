import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: 'admin' | 'user';
  address: string;
};

export interface UserModel extends Model<TUser> {
  isUserExist(email: string): Promise<TUser>;
  isPasswordMatched(password: string, hashedPassword: string): Promise<boolean>;
}
