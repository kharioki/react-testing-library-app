import { render, screen } from '@testing-library/react';
import TodoFooter from '../TodoFooter';
import { BrowserRouter } from 'react-router-dom';

const MockTodoWrapper = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  )
}

it('should render the correct amount of incomplete tasks', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={5} />
  );
  const paragraphElement = screen.getByText(/5 tasks left/i);
  expect(paragraphElement).toBeInTheDocument();
})

it('should render "task" when number of incomplete tasks is one', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={1} />
  );
  const paragraphElement = screen.getByText(/1 task left/i);
  expect(paragraphElement).toBeInTheDocument();
})

// ASSERTION
// toBeTruthy assertion

it('should render number of incomplete tasks - truthy', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={2} />
  );
  const paragraphElement = screen.getByText(/2 tasks left/i);
  expect(paragraphElement).toBeTruthy();
})

// toBeVisible assertion - makes sure element is visible to user

it('should render number of incomplete tasks - visible', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={2} />
  );
  const paragraphElement = screen.getByText(/2 tasks left/i);
  expect(paragraphElement).toBeVisible();
})

// toContainHTML assertion - check that it cotains a certain html element

it('should contain a HTML "p" tag', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={2} />
  );
  const paragraphElement = screen.getByText(/2 tasks left/i);
  expect(paragraphElement).toContainHTML("p");
})

// toHaveTextContent assertion - Check whether the given element has a text content or not.

it('should have a text content', () => {
  render(
    <MockTodoWrapper numberOfIncompleteTasks={3} />
  );
  // const paragraphElement = screen.getByRole("paragraph");
  const paragraphElement = screen.getByTestId("para");
  expect(paragraphElement).toHaveTextContent("3 tasks left");
})
