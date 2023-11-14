import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input, FormHelperText, Paper, Grid } from '@mui/material';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
      console.log('Login:', login, 'Senha:', senha);
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="login_nome">Login</InputLabel>
            <Input
              id="login_nome"
              aria-describedby="login_nome_helper_text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <FormHelperText id="login_nome_helper_text">Digite seu login.</FormHelperText>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="senha">Senha</InputLabel>
            <Input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
            <FormHelperText id="senha_helper_text">Digite sua senha.</FormHelperText>
          </FormControl>

          <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
            Entrar
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
