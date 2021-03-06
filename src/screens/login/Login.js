import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './Login.css';
import Home from '../../screens/home/Home';
import Profile from '../../screens/profile/Profile';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormHelperText from '@material-ui/core/FormHelperText';
import { BrowserRouter as Router, Route } from 'react-router-dom';




class Login extends Component {

    constructor() {
        super();
        this.state = {

            usernameRequired: "dispNone",
            passwordRequired: "dispNone",
            username: "",
            password: ""
        }
    }



    loginClickHandler = () => {


        this.state.username === "" ? this.setState({ usernameRequired: "dispBlock" }) : this.setState({ usernameRequired: "dispNone" });
        this.state.password === "" ? this.setState({ passwordRequired: "dispBlock" }) : this.setState({ passwordRequired: "dispNone" });


    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value })
    }
    inputPasswordChangeHandler = (e) => {
        this.setState({ password: e.target.value });
    }
    render() {
        return (


            <div>
                <Router>
                    <div className="main-container">
                    
                        <Route path='/home' render={(props) => <Home {...props} />} />
                        <Route path='/profile' render={(props) => <Profile {...props} />} />
                    </div>
                </Router>
                <Header />
                <div className="cardStyle">

                    <Card >
                        <CardContent>

                            <Typography variant="title">LOGIN</Typography>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" password={this.state.password} onChange={this.inputPasswordChangeHandler} />
                                <FormHelperText className={this.state.passwordRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>

                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;