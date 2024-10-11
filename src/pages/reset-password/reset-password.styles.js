import styled from 'styled-components';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export const Paper = styled.div`
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarWrapper = styled(Avatar)`
  margin: 8px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Form = styled.form`
  width: 100%; // Fix IE 11 issue.
  margin-top: 8px;
`;

export const SubmitButton = styled(Button)`
  margin: 24px 0 16px 0;
`;
