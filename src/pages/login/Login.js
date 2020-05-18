import React, { Component } from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
// 引入图片
import Logo from '../../assets/imgs/logo.png'
import User from '../../assets/imgs/yonghu.png'
import Pwd from '../../assets/imgs/mimasuo.png'
// 引入UI框架
import { InputItem, Button, Flex, WingBlank, WhiteSpace } from 'antd-mobile';

import { login } from '../../api/apis' //引入登录api

export default class Login extends Component {

    state = {
        username: '',
        pwd: '',
        isClick: false,//防抖节流控制点击的标杆
        isShow:'none'
    }

    render() {
        let { username, pwd } = this.state;
        return (
            <div className='login'>
                <Flex justify='center'>
                    <img src={Logo}></img>
                </Flex>
                <WhiteSpace size="xl" />
                <WingBlank size="lg">
                    <InputItem placeholder="请输入手机号" clear value={username} onChange={this.usernameChange}>
                        <div style={{ backgroundImage: 'url(' + User + ')', backgroundSize: 'cover', height: '26px', width: '26px' }} />
                    </InputItem>
                    <InputItem placeholder="请输入密码" clear type='password' value={pwd} onChange={this.pwdChange}>
                        <div style={{ backgroundImage: 'url(' + Pwd + ')', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <div style={{color:'red',display:this.state.isShow}}>请输入正确的账号和密码</div>
                    <WhiteSpace size="lg" />
                    
                    <Button className='loginBtn' onClick={this.saveData}>登录</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify='between'><Link to='/reg'>手机快速注册</Link><a>忘记密码？</a></Flex>
                    <Flex justify="center">
                        <p>登录/注册即代表同意《源码房产用户协议》</p>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
    //在输入框发生变化的时候修改状态的值
    usernameChange = (val) => {
        this.setState({
            username: val
        })
    }
    pwdChange = (val) => {
        this.setState({
            pwd: val
        })
    }
    //点击保存的时候打出输入框中的值
    saveData = () => {

        if (this.state.isClick) {
            return
        }
        this.state.isClick = true
        setTimeout(() => {
            this.state.isClick = false
        }, 2000);

        login(this.state.username, this.state.pwd).then((res) => {
            console.log(res);
            if(res.data === 'ok'){
                window.location.href= '/'
            }else{
                this.setState({
                    isShow:'block'
                })
            }
        })
    }
}

