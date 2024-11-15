import { toast } from 'react-toastify';

import client from './api';
import { useMutation } from 'react-query';

export const useMutationInviteEmployee = () => {
  return useMutation(newEmployeeRequest, {
    onSuccess: (data) => {
      toast.success('E-mail de convite enviado com sucesso!');
    },
    onError: () => {
      toast.error(
        'Não foi possível enviar o e-mail de convite, por favor tente novamente mais tarde!'
      );
    },
  });
};

const newEmployeeRequest = async (email) => {
  const { data } = await client.post('/invite-employee', {
    user: { email },
  });
  return data;
};
