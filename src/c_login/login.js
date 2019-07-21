import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import './css/main.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const ranges = [
    {
      value: '0-20',
      label: '0 to 20',
    },
    {
      value: '21-50',
      label: '21 to 50',
    },
    {
      value: '51-100',
      label: '51 to 100',
    },
  ];
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    withoutLabel: {
      marginTop: theme.spacing(3),
    },
    textField: {
      flexBasis: 200,
    },
    icon_fp: {
        fontSize: 50,
    },
    butt: {
        paddingTop: 10
    }
    
  }));
  export default function InputAdornments() {
    const classes = useStyles();
    const [values, setValues] = useState({
      
      password: '',
      showPassword: false,
      email: ''
    });
  
    const handleChange = prop => event => {
      setValues({ ...values, [prop]: event.target.value });
    };
  
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
    };
  
    return (
            <body>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100">
                            <form className="validate-form">
                                <span className="login100-form-title p-b-26">
                                    Welcome
                                </span>
                                <span className="login100-form-title p-b-48">
                                    <FingerprintIcon className={classes.icon_fp}/>
                                </span>
                                <Grid
                                  container
                                  direction="row"
                                  justify="center"
                                  alignItems="center"
                                >
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="adornment-password">Email</InputLabel>
                                    <Input className="input100"
                                    id="adornment-password"
                                    type='text'
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    endAdornment={
                                        
                                        <IconButton >
                                            {<Email/>}
                                        </IconButton>
                                        
                                    }
                                    />
                                </FormControl>
    
                                <FormControl className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="adornment-password">Password</InputLabel>
                                    <Input className="input100"
                                    id="adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        <IconButton aria-label="Toggle password visibility" onClick={handleClickShowPassword}>
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                        </InputAdornment>
                                    }
                                    />
                                </FormControl>
                                </Grid>
                                <Grid
                                container
                                direction="row"
                                justify="center"
                                alignItems="center">
                                <div className={classes.butt}>
                                <Button variant="contained" color="primary" className={classes.button}>
                                  LOGIN
                                </Button>
                                </div>
                                </Grid>
                                
                                  <div className="tes">
                                    <span className="txt1 tes">
                                        Don’t have an account?
                                    </span>
    
                                    <a className="tes" href="#">
                                        Sign Up
                                    </a>
                        
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </body>
        );
        
    }