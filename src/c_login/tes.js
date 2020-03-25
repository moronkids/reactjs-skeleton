import React, { Component } from 'react';
import { Card, Col } from 'react-bootstrap';
import { SemipolarLoading } from 'react-loadingg';
// import styles from '../bs.module.css';
import globalStyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import lcl from '../index.css';
import cx from 'classnames'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      password: '',
      email: '',
      loading: false
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }
  render() {
    const data = { password: this.state.password, email: this.state.email };
    const { loading } = this.state;
    // console.log(loading)
    const onSubmit = event => {
      this.setState({ loading: true }, () => {
      })
      event.preventDefault();
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then(res => {
          console.log({ sts: res })
          if (res.status === 400) {
            this.setState({
              loading: false
            })
            // localStorage.setItem('email', this.state.email);
            this.props.history.push('/login');
            // alert(res)
          } else if (res.status === 200) {
            this.setState({
              loading: false
            })
            localStorage.setItem('email', this.state.email);
            this.props.history.push('/home');
            alert(res.status)
          }
          else {
            this.props.history.push('/login');
            alert('network occured error')
          }
          return res.json();
        })
        .then(res => {

          if (res.token != null) {
            localStorage.setItem('token', res.token);
          }
        })
    }
    return (
      <div>
        {loading ? <div><SemipolarLoading /><div className={cx(lcl['overlay'])} /></div> : ''}
        <Col md={{ span: 4, offset: 4 }} style={{ height: '100vh' }}>
          <div style={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
            <Card className={cx(globalStyles['mx-auto'], globalStyles['my-auto'], globalStyles.shadow, globalStyles['p-3'], globalStyles['mb-5'], globalStyles['bg-white'], globalStyles.rounded)} style={{ minWidth: '18rem', height: 'auto', padding: '30px', display: 'flex', justifyContent: 'center' }}>
              <form id="formlg" onSubmit={onSubmit}>
                <h3>Sign In</h3>
                <div className={cx(globalStyles['form-group'])}>
                  <label>Email address</label>
                  <input onChange={this.handleChange} name="email" type="email" className={cx(globalStyles['form-control'])} placeholder="Enter email" />
                </div>
                <div className={cx(globalStyles['form-group'])}>
                  <label>Password</label>
                  <input onChange={this.handleChange} name="password" type="password" className={cx(globalStyles['form-control'])} placeholder="Enter password" />
                </div>
                <div className={cx(globalStyles['form-group'])}>
                  <div className={cx(globalStyles['custom-control'], globalStyles['custom-checkbox'])}>
                    <input type="checkbox" className={cx(globalStyles['custom-control-input'])} id="customCheck1" />
                    <label className={cx(globalStyles['custom-control-label'])} htmlFor="customCheck1">Remember me</label>
                  </div>
                </div>
                <button type="submit" className={cx(globalStyles.btn, globalStyles['btn-primary'], globalStyles['btn-block'])}>Submit</button>
              </form>
            </Card>
          </div>
        </Col>

      </div>

    );
  }
}

export default Login;