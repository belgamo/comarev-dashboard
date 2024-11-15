import { screen, waitFor } from '@testing-library/react';
import wrapper from 'test/test-utils';
import userEvent from '@testing-library/user-event';

import InviteEmployee from '../invite-employee.component';

jest.mock('components/template/template.component', () => ({
  __esModule: true,
  default: function Mock({ children }) {
    return <div data-testid='Mock Template'>{children}</div>;
  },
}));

let mockIsLoading = false;
let mockMutate = jest.fn();

jest.mock('service/invite-employee', () => ({
  useMutationInviteEmployee: () => ({
    isLoading: mockIsLoading,
    mutate: mockMutate,
  }),
}));

describe('<InviteEmployee />', () => {
  it('renders with <Template />', () => {
    wrapper(InviteEmployee);

    const template = screen.getByTestId('Mock Template');
    expect(template).toBeInTheDocument();
  });

  it('renders with title, email input and submit button', () => {
    wrapper(InviteEmployee);

    const title = screen.getByRole('heading', {
      name: /convidar novo empregado/i,
    });
    const emailInput = screen.getByRole('textbox', {
      name: /endereço de email/i,
    });
    const submitButton = screen.getByRole('button', { name: /enviar e-mail/i });

    expect(title).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should call mutate function on submit', async () => {
    mockMutate = jest.fn();
    const email = 'test@example.com';
    wrapper(InviteEmployee);

    const emailInput = screen.getByRole('textbox', {
      name: /endereço de email/i,
    });

    const submitButton = screen.getByRole('button', { name: /enviar e-mail/i });

    userEvent.type(emailInput, email);
    userEvent.click(submitButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledTimes(1);
    });

    expect(mockMutate).toHaveBeenCalledWith(email);
  });

  describe('when it is loading', () => {
    beforeEach(() => {
      mockIsLoading = true;
      wrapper(InviteEmployee);
    });

    it('renders with loading spinner', () => {
      const loadingSpinner = screen.getByRole('img', {
        name: 'Loading spinner',
      });

      expect(loadingSpinner).toBeInTheDocument();
    });

    it('renders with a disabled submit button', () => {
      expect(
        screen.getByRole('button', { name: /enviando e-mail/i })
      ).toBeDisabled();
    });
  });

  describe('when it is not loading', () => {
    beforeEach(() => {
      mockIsLoading = false;
      wrapper(InviteEmployee);
    });

    it('renders with no loading spinner', () => {
      const loadingSpinner = screen.queryByRole('img', {
        name: 'Loading spinner',
      });

      expect(loadingSpinner).not.toBeInTheDocument();
    });

    it('renders with an enabled submit button', () => {
      expect(
        screen.getByRole('button', { name: /enviar e-mail/i })
      ).toBeEnabled();
    });
  });
});
