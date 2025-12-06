import { BasePage } from "./base-page";
import { expect } from "@playwright/test";

export class TodoPage extends BasePage {
  newTodoInput = () =>
    this.page.getByRole("textbox", { name: "What needs to be done?" });

  // Stable selector for todo items
  todoItems = () => this.page.locator(".todo-list li");

  async goto() {
    await this.page.goto("https://demo.playwright.dev/todomvc/#/");
  }

  async addTodo(text: string) {
    await this.newTodoInput().fill(text);
    await this.newTodoInput().press("Enter");
  }

  async toggleTodo(text: string) {
    const item = this.todoItems().filter({ hasText: text });
    await item.getByLabel("Toggle Todo").click();
  }

  async deleteTodo(text: string) {
    const item = this.todoItems().filter({ hasText: text });
    await item.hover();
    await item.getByRole("button", { name: "Delete" }).click();
  }

  async clickFilter(filter: "All" | "Active" | "Completed") {
    await this.page.getByRole("link", { name: filter }).click();
  }

  async clearCompleted() {
    await this.page.getByText("Clear completed").click();
  }

  async assertTodoExists(text: string) {
    const locator = this.todoItems().filter({ hasText: text });
    await expect(locator).toBeVisible();
  }

  async assertTodoNotExists(text: string) {
    const locator = this.todoItems().filter({ hasText: text });
    await expect(locator).not.toBeVisible();
  }

  async assertTodoCompleted(text: string) {
    const item = this.todoItems().filter({ hasText: text });
    const checkbox = item.getByRole("checkbox");
    await expect(checkbox).toBeChecked();
  }

  async assertNoTodos() {
    await expect(this.todoItems()).toHaveCount(0);
  }

  async countTodos(text: string) {
    return await this.todoItems().filter({ hasText: text }).count();
  }
}
