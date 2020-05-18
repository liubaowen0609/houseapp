import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// 引入UI框架
import { InputItem, Button, Radio, WingBlank, WhiteSpace, NoticeBar, Icon } from 'antd-mobile';
import './reg.scss'

import { reg, Verification } from '../../api/apis' //引入注册api

export default class Reg extends Component {

    state = {
        acc: '',
        pwd: '',
        usernum: '',
        Verification: '',
        isShow: 'none',
    }

    render() {
        let { acc, pwd, Verification, isShow, usernum} = this.state;
        return (
            <div className='register'>
                <div style={{ display: isShow }}>
                    <NoticeBar>
                        您的验证码是：{Verification}
                    </NoticeBar>
                </div>
                <WingBlank>
                    <WhiteSpace size="xl" />
                    <InputItem placeholder="请输入手机" value={acc} onChange={this.accChange} clear></InputItem>
                    <InputItem placeholder="请输入密码" value={pwd} onChange={this.pwdChange} clear></InputItem>
                    <InputItem placeholder="请输入验证码" extra='获取验证码' onExtraClick={this.Verification} value={usernum} onChange={this.numChange}></InputItem>
                    <WhiteSpace size="md" />
                    <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>我已同意<a>《用户服务协议》</a>及<a>《隐私权政策》</a></Radio>
                    <WhiteSpace size="md" />
                    <Button className='regBtn' onClick={this.register}>注册</Button>
                    <p><Link to='/'>已有帐号</Link></p>
                </WingBlank>

            </div>
        )
    }
    // 获取验证码
    Verification = () => {
        Verification().then((res) => {
            if (res.data) {
                console.log('ok');
                this.setState({
                    Verification: res.data,
                    isShow: 'block'
                })
            } else {
                console.log('no');
            }
        })
    }
    // 监听账号
    accChange = (val) => {
        this.setState({
            acc: val
        })
    }
    // 监听密码
    pwdChange = (val) => {
        this.setState({
            pwd: val
        })
    }
    // 监听验证码
    numChange = (val) => {
        this.setState({
            usernum: val
        })
    }
    // 注册
    register = () => {
        if (this.state.usernum == this.state.Verification && this.state.usernum != '' && this.state.Verification != '' && this.state.acc != '' && this.state.pwd != '') {
            reg(this.state.acc, this.state.pwd).then((res) => {
                if(res.data === 'ok'){
                    window.location.href = '/#/login'
                }
            })
        } else {
            console.log("youcuo");

        }
    }
}
