export interface IUser {
  username: string;
  password: string;
}

export interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  avartar: string;
  isactive: boolean;
  positionId: Number;
}
export interface Position {
  id: number;
  name: string;
  salary: number;
}
export interface UserStore {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  avartar: string;
  isActive: boolean;
  position: Position;
}
