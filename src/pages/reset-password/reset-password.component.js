import React from 'react';
import { useParams } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as yup from 'yup';
import * as S from './reset-password.styles';

import { useMutationNewPassword } from 'service/password';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import RHFInput from 'components/rhf-input/rhf-input.component';

const schema = yup.object().shape({
  password: yup.string().required('Campo obrigatório'),
  confirmPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'As senhas não são iguais. Tente novamente.'
    )
    .required('Campo obrigatório'),
});

const ResetPassword = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { password: '', confirmPassword: '' },
    mode: 'onBlur',
  });

  const { token } = useParams();

  const { isLoading, mutate } = useMutationNewPassword();

  const handleOnSubmit = async (data) => {
    const payload = { ...data, token };

    mutate(payload);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <S.Paper>
        <S.AvatarWrapper>
          <LockOutlinedIcon />
        </S.AvatarWrapper>
        <Typography component='h1' variant='h5'>
          Redefinir senha
        </Typography>
        <S.Form onSubmit={handleSubmit((data) => handleOnSubmit(data))}>
          <RHFInput
            control={control}
            name='password'
            label='Senha'
            type='password'
            id='password'
          />
          <RHFInput
            control={control}
            name='confirmPassword'
            label='Confirmar senha'
            type='password'
            id='confirmPassword'
          />
          <S.SubmitButton
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            onClick={handleSubmit}
            disabled={isLoading}
            aria-label='redefinir senha'
          >
            {isLoading ? (
              <CircularProgress data-testid='login-spinner' size={25} />
            ) : (
              'Redefinir'
            )}
          </S.SubmitButton>
        </S.Form>
      </S.Paper>
    </Container>
  );
};

export default ResetPassword;
