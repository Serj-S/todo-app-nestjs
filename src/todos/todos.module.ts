import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { TodoRepository } from './todos.repository';
import { MapTodoRepository } from './repositories/map-todo.repository';

@Module({
  controllers: [TodosController],
  providers: [
    TodosService,
    {
      provide: TodoRepository,
      useClass: MapTodoRepository,
    },
  ],
})
export class TodosModule {}
