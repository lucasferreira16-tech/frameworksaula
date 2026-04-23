import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { DeleteTodoRepository, FindAllTodoRepository, FindUniqueTodoRepository, UpdateTodoRepository } from './repository';
import { CreateTodoUseCase } from './use-cases';


@Injectable()
export class TodosService {
  constructor(
    private readonly createTodoUseCase: CreateTodoUseCase,
    private readonly findAllTodoRepository: FindAllTodoRepository,
    private readonly findUniqueTodoRepository: FindUniqueTodoRepository,
    private readonly updateTodoRepository: UpdateTodoRepository,
    private readonly deleteTodoRepository: DeleteTodoRepository,
  ) {}

  async create(data: CreateTodoDto) {
    return await this.createTodoUseCase.execute(data);
  }

  async findAll() {
    return await this.findAllTodoRepository.findAll();
  }

  async findOne(id: string) {
    return await this.findUniqueTodoRepository.findById(id);
  }

  async update(id: string, data: UpdateTodoDto) {
    return await this.updateTodoRepository.update(id, data);
  }

  async remove(id: string) {
    return await this.deleteTodoRepository.delete(id);
  }
}
