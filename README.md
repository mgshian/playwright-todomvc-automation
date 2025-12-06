# TodoMVC Automation – Playwright

This project contains automated end-to-end tests for the TodoMVC application  
using **Playwright (TypeScript)**, Page Object Model, and fixtures.

---

## Features

- Page Object Model (POM)
- Fixtures for browser setup
- Clean and reusable locators
- Automated high-priority scenarios
- Organized project structure

---

## Setup & Run Tests

Clone the repository:

- git clone https://github.com/mgshian/playwright-todomvc-automation.git
- cd project

## Install dependencies:

- npm install
- npx playwright install

## Run tests

- npx playwright test --headless

## Project Structure

src/

- tests/todo.spec.ts
- pages/todo-page.ts
- fixtures/playwright-fixtures.ts
- helpers/utils.ts

## Scenarios Automated

- Add a new todo
- Mark a todo as completed
- Delete a todo
- Filter completed todos
- Clear completed todos
- Negative: Should NOT add an empty todo
- Negative: Allow duplicate todos

## Doc

- docs/PartA_Manual_Testing.pdf

## Author - Sherrie Ann Manguiat
