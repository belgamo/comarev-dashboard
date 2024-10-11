import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import client from './api';
import { useMutation } from 'react-query';

export const useMutationPasswordRecovery = () => {
  return useMutation(passwordRecovery, {
    onSuccess: (data) => {
      toast.success('E-mail de recuperação enviado com sucesso!');
    },
    onError: () => {
      toast.error(
        'Não foi possível enviar o e-mail de recuperação, por favor tente novamente mais tarde!'
      );
    },
  });
};

const passwordRecovery = async (email) => {
  const { data } = await client.post('/users/password', {
    user: { email },
  });
  return data;
};

export const useMutationNewPassword = () => {
  const history = useHistory();
  return useMutation(newPassword, {
    onSuccess: (data) => {
      toast.success('Senha criada com sucesso!');
      history.push('/');
    },
    onError: () => {
      toast.error(
        'Não foi possível criar uma nova, por favor tente novamente mais tarde!'
      );
    },
  });
};

const newPassword = async ({ password, confirmPassword, token }) => {
  const { data } = await client.post('/users/reset-password', {
    user: { password, confirmPassword, token },
  });

  return data;
};
