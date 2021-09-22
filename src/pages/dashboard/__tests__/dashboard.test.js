import Dashboard from '../dashboard.component';
import wrapper from '../../../test/test-utils';
import { fireEvent } from '@testing-library/react';
import { userData } from '../../../test/mocks/user';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

const setup = () => {
  const rendered = wrapper(Dashboard);
  const { getByLabelText } = rendered;

  const menuButton = getByLabelText('menu');

  fireEvent.click(menuButton);

  return rendered;
};

describe('Dashboard Sidebar', () => {
  describe('when admin', () => {
    beforeEach(() => {
      useSelector.mockImplementation(() => ({ ...userData, admin: true }));
    });

    it('show the sidebar with all links', () => {
      const { queryByText } = setup();

      expect(queryByText('Usuários')).toBeInTheDocument();
      expect(queryByText('Parceiros')).toBeInTheDocument();
      expect(queryByText('Faturas')).toBeInTheDocument();
    });
  });

  describe('when normal user', () => {
    beforeEach(() => {
      useSelector.mockImplementation(() => userData);
    });

    it('show only not admin links', () => {
      const { queryByText } = setup();
      const userMenu = queryByText('Usuários');

      expect(queryByText('Faturas')).toBeInTheDocument();
      expect(userMenu).toBeNull();
    });
  });
});
