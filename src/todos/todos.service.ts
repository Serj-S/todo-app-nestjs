import { Injectable } from '@nestjs/common';
import { TodoRepository } from './todos.repository';
import { CreateTodoData, UpdateTodoData } from './types/todo.types';

@Injectable()
export class TodosService {
  constructor(private readonly repository: TodoRepository) {}

  async create(todo: CreateTodoData) {
    return await this.repository.create(todo);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async findOne(id: string) {
    return await this.repository.findById(id);
  }

  async update(id: string, updateTodoDto: UpdateTodoData) {
    return await this.repository.update(id, updateTodoDto);
  }

  async remove(id: string) {
    return await this.repository.delete(id);
  }
}
