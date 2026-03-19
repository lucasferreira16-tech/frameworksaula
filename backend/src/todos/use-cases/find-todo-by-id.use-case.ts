import { Injectable, Logger } from "@nestjs/common";
import { FindUniqueTodoRepository } from "../repository";




@Injectable()
  export class FindTodoBUseCase {
    constructor(
        private readonly findUniqueTodoRepository: FindUniqueTodoRepository,
        private readonly logger: Logger,
    ) {}

    async findById(id: string) {
    try {
        this.logger.log('finding todo...');
        const todo = await this.findUniqueTodoRepository.findById(id);
        this.logger.log('Todo found secessfuly');
        return todo;
    }   catch (error) {
        this.logger.error(error);
        throw new Error('Failed to found toDo');
    }
  }
}
