import { screen, fireEvent, waitFor } from '@testing-library/react';
import wrapper from 'test/test-utils';
import ResetPassword from '../reset-password.component';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useHistory: jest.fn(),
  };
});

describe('<ResetPassword />', () => {
  beforeEach(() => {
    wrapper(ResetPassword);
  });

  it('should render the page with its inputs and a submit button', () => {
    expect(screen.getByText(/redefinir senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^senha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/confirmar senha/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /redefinir/i })
    ).toBeInTheDocument();
  });
});
