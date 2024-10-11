import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import signIn from 'service/auth';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from 'store/modules/user/actions';
import { Box } from '@material-ui/core';

const FORM_ERROR_INITIAL_STATE = {
  email: false,
  password: false,
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  forgetPasswordLink: {
    color: theme.palette.link,
    cursor: 'pointer',
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setError] = useState(FORM_ERROR_INITIAL_STATE);
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onStart = () => setLoading(true);
  const onEnd = () => setLoading(false);
  const onSuccess = (data) => {
    dispatch(loginUser(data));

    localStorage.setItem('user', JSON.stringify(data));

    history.push('/dashboard');
  };

  const onError = (message) => {
    setLoginError(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError({ email: !email, password: !password });
      return;
    }

    const payload = { email, password };

    await signIn(payload, onSuccess, onError, onEnd, onStart);
  };

  useEffect(() => {
    if (email) setError((currentState) => ({ ...currentState, email: !email }));
    if (password)
      setError((currentState) => ({ ...currentState, password: !password }));

    setLoginError('');
  }, [email, password]);

  if (user.logged) return <Redirect to='/dashboard' />;

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Comarev Parceiros
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Endereço de Email'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            error={formError.email}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Senha'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            error={formError.password}
          />
          {Boolean(loginError) && (
            <Typography color='error'>{loginError}</Typography>
          )}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
            disabled={loading}
            aria-label='Logar'
          >
            {loading ? (
              <CircularProgress data-testid='login-spinner' size={25} />
            ) : (
              'Logar'
            )}
          </Button>
          <Grid container>
            <Grid item xs>
              <Box
                variant='body2'
                onClick={() => history.push('/recover-password')}
                className={classes.forgetPasswordLink}
              >
                Esqueceu sua senha?
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignIn;
