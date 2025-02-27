import { Todo } from '../entities/todo.entity';

export type CreateTodoData = Omit<
  Todo,
  'id' | 'created_at' | 'updated_at' | 'deleted_at'
>;
export type UpdateTodoData = Partial<
  Omit<Todo, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>
>;
