import React, { Component } from 'react'
import './chat.scss'
import { Flex, WhiteSpace, Button } from 'antd-mobile';

export default class Chat extends Component {
    render() {
        return (
            <div className='fatherChat'>
                <div className='chat'>
                    <WhiteSpace size="lg" />
                    <Flex justify='center'>
                        <img src={require('../../../assets/imgs/head.jpg')}></img>
                    </Flex>
                    <p>置业顾问：张莹</p>
                    <p>专业服务诚信做人诚心做事！</p>
                    <Flex justify='center'>
                        <Button inline style={{ marginRight: '4px', backgroundColor: '#1aad00', color: '#fff' }}>我要聊天</Button>
                    </Flex>
                    <WhiteSpace size="lg" />
                </div>
            </div>
        )
    }
}
