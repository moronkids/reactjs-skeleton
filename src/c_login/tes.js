import React, {Component} from 'react';
import { Card, Col } from 'react-bootstrap';
import { SemipolarLoading } from 'react-loadingg';

class Login extends Component{
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
  render(){
    const data = {password: this.state.password, email:this.state.email};
    const {loading} = this.state;
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
            console.log(res)
            if (res.status === 400) {
            } else if (res.status === 200) {
              this.setState({
                loading:false
              })
              localStorage.setItem('email', this.state.email);
              this.props.history.push('/home');
            }
            else{
              alert('network occured error')
            }
            return res.json();
            console.log(res.token)
          })
          .then(res => {

            if (res.token != null) {
              localStorage.setItem('token', res.token);
            }
          })

    }
    return(
      <div>
      {loading ? <div><SemipolarLoading/><div id='overlay' /></div> : ''}
      <Col md={{ span: 4, offset:4 }} style={{height: '100vh'}}>
        <div style={{height: '100vh', display:'flex', alignItems: 'center'}}>
          <Card className='mx-auto my-auto shadow p-3 mb-5 bg-white rounded' style={{minWidth: '18rem', height: 'auto',padding:'30px', display: 'flex', justifyContent: 'center'}}>
        <form id="formlg" onSubmit={onSubmit}>
          <h3>Sign In</h3>
          <div className="form-group">
            <label>Email address</label>
            <input onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Enter email"/>
          </div>

          <div className="form-group">
            <label>Password</label>
                <input onChange={this.handleChange}  name="password" type="password" className="form-control" placeholder="Enter password"/>
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">Submit</button>
          {/* <p className="forgot-password text-right">
            Forgot <a href="#">password?</a>
          </p> */}
        </form>
      </Card>
        </div>
      </Col>

      </div>

    );
  }
}

export default Login;