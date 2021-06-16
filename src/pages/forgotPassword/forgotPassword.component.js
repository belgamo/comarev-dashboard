import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useStyles } from './forgotPassword.styles';

const FORM_ERROR_INITIAL_STATE = { email: false };

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(FORM_ERROR_INITIAL_STATE);
  const [warnMessage, setWarnMessage] = useState([]);

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setWarnMessage(['Email deve ser preenchido']);
      return setFormError({ email: true });
    }

    alert(`Call a service, that consumes the api, with email: ${email} !`);
  };

  useEffect(() => {
    if (email) {
      setFormError((currentState) => ({ ...currentState, email: !email }));
      setWarnMessage('');
    }
  }, [email]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Recuperar senha
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Endereço de email'
            name='email'
            autoComplete='email'
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={formError.email}
          />
          {Boolean(warnMessage.length) &&
            warnMessage.map((message) => (
              <Typography color='error'>{message}</Typography>
            ))}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick={handleSubmit}
          >
            Recuperar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ForgotPassword;
