import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component tests', () => {
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
  
  // Find By
  
  it('should render same text passed into title - findBy', async () => {
    render(<Header title="My Header" />);
    const headingElement = await screen.findByText(/My Header/i);
    expect(headingElement).toBeInTheDocument();
  })
  
  // Query By
  
  it('should render same text passed into title - queryBy', async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.queryByText(/cow/i);
    expect(headingElement).not.toBeInTheDocument();
  })
  
  // getAll By
  
  it('should render same text passed into title - getAllBy', async () => {
    render(<Header title="My Header" />);
    const headingElements = screen.getAllByRole("heading");
    //expect(headingElements).toHaveLength(1);
    expect(headingElements.length).toBe(1);
  })
})
