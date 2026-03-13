import { Injectable, Logger } from "@nestjs/common";
import { FindAllTodoRepository } from "../repository";



@Injectable()
  export class FindAllTodoUseCase {
    constructor(
        private readonly findAllTodoRepository: FindAllTodoRepository,
        private readonly logger: Logger,
    ) {}

    async findAll() {
    try {
        this.logger.log('finding todo...');
        const todo = await this.findAllTodoRepository.findAll();
        this.logger.log('Todo found secessfuly');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw new Error('Failed to found toDo');
    }
  }
}
