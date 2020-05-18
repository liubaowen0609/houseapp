import React, { Component } from 'react'
import './my.scss'
import { Flex, WhiteSpace, WingBlank } from 'antd-mobile';
export default class My extends Component {
    loginReg = () =>{
        window.location.href = '/#/login'
    }
    render() {
        return (
            <div className='my'>
                <div className='top'>
                    <WingBlank size="xl">
                        <WhiteSpace size="lg" />
                        <Flex>
                            <img src={require('../../../assets/imgs/head.jpg')} width='70' height='70' ></img>
                            <div>
                                <WingBlank>
                                    <a onClick={this.loginReg}>登录/注册</a>
                                    <WhiteSpace size="lg" />
                                    <div>可以与经纪人发起聊天</div>
                                </WingBlank>
                            </div>
                        </Flex>
                        <Flex>
                            <Flex.Item>
                                <div className='rightBorder' >
                                    <p>0</p>
                                    <img src={require('../../../assets/imgs/钱包.png')} width='30'></img> 钱包
                            </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div className='rightBorder' >
                                    <p>0</p>
                                    <img src={require('../../../assets/imgs/优惠.png')} width='30'></img> 优惠
                            </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{ textAlign: 'center' }}>
                                    <p>0</p>
                                    <img src={require('../../../assets/imgs/积分.png')} width='30'></img> 积分
                            </div>
                            </Flex.Item>
                        </Flex>
                    </WingBlank>

                </div>
                <WhiteSpace size="lg" />

                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>我的积分
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>我的订阅
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>微聊联系人
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                <WhiteSpace size="lg" />
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>房贷计算器
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>f
                    </WingBlank>
                </div>
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>我的房子
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                <WhiteSpace size="lg" />
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>我的看房记录
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>f
                    </WingBlank>
                </div>
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>我的问答
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
                <WhiteSpace size="lg" />
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                <img src={require('../../../assets/imgs/积分 (1).png')}></img>设置
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>f
                    </WingBlank>
                </div>
                <div className='list'>
                    <WingBlank size='lg'>
                        <Flex>
                            <Flex.Item>
                                意见反馈
                            </Flex.Item>
                            <Flex.Item style={{ textAlign: 'right' }}>
                                >
                            </Flex.Item>
                        </Flex>
                    </WingBlank>
                </div>
            </div>
        )
    }
}
