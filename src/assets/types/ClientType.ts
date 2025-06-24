import type { TodoType } from "./TodoType";

export interface ClientType {
  name: string;
  addresse: string;
  todos: TodoType[] | [];
}
