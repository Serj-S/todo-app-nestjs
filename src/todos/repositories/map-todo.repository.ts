import { Injectable, NotFoundException } from '@nestjs/common';
import { TodoRepository } from '../todos.repository';
import { Todo } from '../entities/todo.entity';
import { CreateTodoData } from '../types/todo.types';
import { randomUUID } from 'crypto';

@Injectable()
export class MapTodoRepository extends TodoRepository {
  private readonly todos = new Map<string, Todo>();

  async create(todo: CreateTodoData): Promise<Todo> {
    const id = randomUUID();
    const newTodo = {
      ...todo,
      id,
      created_at: new Date(),
      updated_at: new Date(),
    };

    this.todos.set(id, newTodo);
    return newTodo;
  }

  async findAll(): Promise<Todo[]> {
    return Array.from(this.todos.values()).filter((t) => !t.deleted_at);
  }

  async findById(id: string): Promise<Todo | null> {
    return this.todos.get(id) || null;
  }

  async update(id: string, data: Partial<Todo>): Promise<Todo> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const updatedTodo = {
      ...existing,
      ...data,

      id: existing.id,
      created_at: existing.created_at,
      updated_at: new Date(),
    };

    this.todos.set(id, updatedTodo);
    return updatedTodo;
  }

  async delete(id: string): Promise<void> {
    const existing = await this.findById(id);
    if (!existing) {
      throw new NotFoundException(`Todo with id ${id} not found`);
    }

    const updatedTodo = {
      ...existing,
      deleted_at: new Date(),
    };

    this.todos.set(id, updatedTodo);
  }
}
