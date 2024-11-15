import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as S from './invite-employee.styles';
import * as yup from 'yup';

import { useMutationInviteEmployee } from 'service/invite-employee';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFInput from 'components/rhf-input/rhf-input.component';
import Template from 'components/template/template.component';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const InviteEmployee = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  });

  const { isLoading, mutate } = useMutationInviteEmployee();

  return (
    <Template>
      <CssBaseline />
      <Container component='main' maxWidth='xs'>
        <S.Paper>
          <Typography component='h1' variant='h5'>
            Convidar novo empregado
          </Typography>
          <S.Form
            onSubmit={handleSubmit(async (data) => {
              mutate(data.email);
            })}
          >
            <RHFInput
              control={control}
              label='Endereço de Email'
              name='email'
              id='email'
            />
            <S.SubmitButton
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              disabled={isLoading}
              aria-label={isLoading ? 'Enviando e-mail' : 'Enviar e-mail'}
            >
              {isLoading ? (
                <CircularProgress
                  role='img'
                  aria-label='Loading spinner'
                  size={25}
                />
              ) : (
                'Enviar'
              )}
            </S.SubmitButton>
          </S.Form>
        </S.Paper>
      </Container>
    </Template>
  );
};

export default InviteEmployee;
