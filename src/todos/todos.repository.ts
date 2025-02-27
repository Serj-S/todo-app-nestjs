import { Todo } from './entities/todo.entity';
import { CreateTodoData, UpdateTodoData } from './types/todo.types';

export abstract class TodoRepository {
  abstract create(todo: CreateTodoData): Promise<Todo>;
  abstract findAll(): Promise<Todo[]>;
  abstract findById(id: string): Promise<Todo | null>;
  abstract update(id: string, data: UpdateTodoData): Promise<Todo>;
  abstract delete(id: string): Promise<void>;
}
