// Libs
import React, {Component} from 'react';
import {Meteor} from 'meteor/meteor';
import {Divider, Header, Icon, Form, Button, Message} from 'semantic-ui-react'

export default class SignIn extends Component {

    state = {notAuthenticated: false};

    componentDidMount() {
        document.body.style.backgroundColor = '#00adc6';
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = '';
    }

    _handleSubmit = (e, serializedForm) => {

        e.preventDefault()

        Meteor.loginWithPassword(serializedForm.username, serializedForm.password, (err) => {
            if (err) {
                this.setState({notAuthenticated: true});
            }
        });

    }

    render() {

        const {notAuthenticated} = {...this.state};

        const boxShadow = '0 2px 2px 0 rgba(0,0,0,0.16),0 0 0 1px rgba(0,0,0,0.08)';

        const style = {textAlign: 'center', padding: '200px 100px 0px 100px'};
        const iconStyle = {textAlign: 'center', color: 'rgba(240,248,255,0.5)'};
        const headerStyle = {color: '#ffffff'};
        const inputStyle = {boxShadow: boxShadow};
        const buttonStyle = {backgroundColor: '#ffffff', color: '#00adc6', boxShadow: boxShadow};

        return (
            <div style={style}>

                <Icon size={'massive'} name={'unlock alternate'} style={iconStyle}/>
                <Divider/>
                <Header as='h1' content={'Please sign in'} style={headerStyle}/>

                <Form onSubmit={this._handleSubmit} error={notAuthenticated}>

                    <Form.Group widths='2'>
                        <Form.Input
                            name='username'
                            style={inputStyle}
                            className='sign-in-input'
                            placeholder='Username'
                            onChange={() => this.setState({notAuthenticated: false})}
                        />
                        <Form.Input
                            name='password'
                            style={inputStyle}
                            className='sign-in-input'
                            type='password'
                            placeholder='Password'
                            onChange={() => this.setState({notAuthenticated: false})}
                        />
                    </Form.Group>

                    <Message
                        error
                        header='Action Forbidden'
                        content='You have entered an invalid username and password. Try again.'
                    />

                    <Button type='submit' content={'Sign In'} style={buttonStyle}/>

                </Form>

            </div>
        )

    }

}