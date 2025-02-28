import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todos.repository';
import { CreateTodoData, UpdateTodoData } from './types/todo.types';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodoRepository) {}

  create(todo: CreateTodoData) {
    return this.repository.create(todo);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, updateTodoDto: UpdateTodoData) {
    return this.repository.update(id, updateTodoDto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
