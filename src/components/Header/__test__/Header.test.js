import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('should render same text passed into title prop', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByText(/My Header/i);
  expect(headingElement).toBeInTheDocument();
})

it('should render same text passed as heading', () => {
  render(<Header title="My Header" />);
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
})
