/**
 * Represents a Todo item entity for business logic and storage
 *
 * @example
 * const todo = new Todo();
 * todo.name = 'Buy milk';
 * todo.status = false;
 * todo.created_at = new Date();
 */
export class Todo {
  /**
   * Unique identifier in UUID format
   * @example '550e8400-e29b-41d4-a716-446655440000'
   */
  id: string;

  /**
   * Short title of the todo item
   * @example 'Complete project report'
   * @maxLength 255
   */
  name: string;

  /**
   * Detailed description (optional)
   * @example 'Need to finish before Friday meeting'
   */
  description?: string;

  /**
   * Completion status
   * @default false
   * @example true
   */
  status: boolean;

  /**
   * Optional expiration date
   * @example '2024-12-31T23:59:59.999Z'
   */
  expires?: Date;

  /**
   * Creation timestamp (auto-generated)
   * @readonly
   * @example '2024-01-01T00:00:00.000Z'
   */
  created_at: Date;

  /**
   * Last update timestamp (auto-updated)
   * @readonly
   * @example '2024-01-02T12:30:45.000Z'
   */
  updated_at: Date;

  /**
   * Soft delete timestamp (marks as deleted)
   * @readonly
   * @example '2024-01-03T15:45:30.000Z'
   */
  deleted_at?: Date;
}
