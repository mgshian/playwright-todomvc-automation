import { test, expect } from "../fixtures/playwright-fixtures";

test.describe("TodoMVC Positive Scenarios", () => {
  test("should add a new todo", async ({ todoPage }) => {
    await todoPage.goto();
    await todoPage.addTodo("Apply for a Job");
    await todoPage.assertTodoExists("Apply for a Job");
  });

  test("should mark a todo as completed", async ({ todoPage }) => {
    await todoPage.goto();
    await todoPage.addTodo("Passed Interview");

    await todoPage.toggleTodo("Passed Interview");

    await todoPage.assertTodoCompleted("Passed Interview");
  });

  test("should delete a todo", async ({ todoPage }) => {
    await todoPage.goto();
    await todoPage.addTodo("Get hired");

    await todoPage.deleteTodo("Get hired");

    await todoPage.assertTodoNotExists("Get hired");
  });

  test("should filter completed todos", async ({ todoPage }) => {
    await todoPage.goto();

    await todoPage.addTodo("Task 1");
    await todoPage.addTodo("Task 2");

    await todoPage.toggleTodo("Task 1");

    await todoPage.clickFilter("Completed");

    await todoPage.assertTodoExists("Task 1");
    await todoPage.assertTodoNotExists("Task 2");
  });

  test("should clear completed todos", async ({ todoPage }) => {
    await todoPage.goto();

    await todoPage.addTodo("Task");
    await todoPage.toggleTodo("Task");

    await todoPage.clearCompleted();

    await todoPage.assertNoTodos();
  });
});

test.describe("TodoMVC Negative Scenarios", () => {
  test("should NOT add an empty todo", async ({ todoPage }) => {
    await todoPage.goto();

    await todoPage.addTodo("");

    await todoPage.assertNoTodos();
  });

  test("should allow duplicate todos (application behavior)", async ({
    todoPage,
  }) => {
    await todoPage.goto();

    const text = "Repeat Task";

    await todoPage.addTodo(text);
    await todoPage.addTodo(text);

    const count = await todoPage.countTodos(text);
    expect(count).toBe(2);
  });
});
