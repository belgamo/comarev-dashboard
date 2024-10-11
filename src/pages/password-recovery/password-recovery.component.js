import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';
import * as S from './password-recovery.styles';
import * as yup from 'yup';

import { useMutationPasswordRecovery } from 'service/password';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import RHFInput from 'components/rhf-input/rhf-input.component';

const schema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
});

const RecoverPassword = () => {
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { email: '' },
    mode: 'onBlur',
  });

  const history = useHistory();

  const { isLoading, mutate } = useMutationPasswordRecovery();

  return (
    <Container component='main' maxWidth={false}>
      <CssBaseline />
      <S.GetBackIcon>
        <ArrowBackIcon onClick={() => history.goBack()} />
      </S.GetBackIcon>
      <Container component='main' maxWidth='xs'>
        <S.Paper>
          <S.AvatarWrapper>
            <LockOutlinedIcon />
          </S.AvatarWrapper>

          <Typography component='h1' variant='h5'>
            Recuperar senha
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
              aria-label='Recuperar senha'
            >
              {isLoading ? (
                <CircularProgress data-testid='login-spinner' size={25} />
              ) : (
                'Recuperar'
              )}
            </S.SubmitButton>
          </S.Form>
        </S.Paper>
      </Container>
    </Container>
  );
};

export default RecoverPassword;
