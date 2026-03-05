export class CreateTodoDto {
  title: string;
  descripition: string;
  completed: boolean;
  priority: TodoPriority;
  dueAt: Date;
  completedAt: Date;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

enum TodoPriority {
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
}