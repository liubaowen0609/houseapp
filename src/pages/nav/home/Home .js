import React, { Component } from 'react'
import { NavBar, Icon, SearchBar, Button, WhiteSpace, WingBlank, Carousel, Grid, Flex } from 'antd-mobile';
import './home.scss'
import { gethouselist } from '../../../api/apis' //获取楼盘列表
// 中间项目模块数据
let arr = [
    {
        icon: require('../../../assets/imgs/logo-01.png'),
        text: '新房'
    },
    {
        icon: require('../../../assets/imgs/logo-2.png'),
        text: '二手房'
    },
    {
        icon: require('../../../assets/imgs/logo-3.png'),
        text: '租房'
    }
    ,
    {
        icon: require('../../../assets/imgs/logo-4.png'),
        text: '商品写字楼'
    }
    ,
    {
        icon: require('../../../assets/imgs/logo-5.png'),
        text: '卖房'
    }
    ,
    {
        icon: require('../../../assets/imgs/logo-6.png'),
        text: '海外房产'
    }
    ,
    {
        icon: require('../../../assets/imgs/logo-7.png'),
        text: '小区房价'
    }
    ,
    {
        icon: require('../../../assets/imgs/logo-8.png'),
        text: '问答'
    }
]
// 中间项目模块渲染
const data = arr.map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
}));

// 工具模块数据
let arr1 = [
    {
        icon: require('../../../assets/imgs/贷款.png'),
        text: '贷款'
    },
    {
        icon: require('../../../assets/imgs/计算器.png'),
        text: '计算器'
    },
    {
        icon: require('../../../assets/imgs/知识.png'),
        text: '知识'
    },
    {
        icon: require('../../../assets/imgs/扫一扫.png'),
        text: '扫一扫'
    },
]
// 工具模块渲染
const data1 = arr1.map((_val, i) => ({
    icon: _val.icon,
    text: _val.text,
}));

export default class index extends Component {
    state = {
        data: ['banner1', 'banner2', 'banner3'],
        imgHeight: 300,
        houseList: []
    }
    render() {
        return (
            <div className='home'>
                <div className='navbar' >
                    <div style={{ backgroundColor: '#00bc5b' }}>
                        <WingBlank size="md">
                            <div onClick={this.clickTitle.bind(this,'/#/choose')}>重庆市<Icon key="0" type="down" style={{ verticalAlign: 'middle' }} /></div>
                            <div><input placeholder='挑好房，上贝壳找房' className='homeSearch'></input></div>
                            <div onClick={this.clickTitle.bind(this,'/#/city')} className='three' style={{ margin: 'right', verticalAlign: 'middle' }}><img src={require('../../../assets/imgs/address.png')}></img></div>
                        </WingBlank>
                    </div>
                </div>
                <Carousel
                    autoplay
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="/"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={require('../../../assets/imgs/' + val + '.jpg')}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <Grid data={data} hasLine={false} />
                <WhiteSpace size="lg" />
                <div className='tool'>
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg" >
                        <strong>房产全百科</strong>
                        <span>专业的买房攻略</span>
                        <Grid data={data1} hasLine={false} />
                    </WingBlank>
                </div>
                <WhiteSpace size="lg" />
                <div className='guess'>
                    <WhiteSpace size="lg" />
                    <WingBlank size="lg">
                        <div style={{ fontSize: '20px' }}>猜你喜欢</div>
                        <WhiteSpace size="lg" />
                        {
                            this.state.houseList.map((item, index) => {
                                return <div className='loveList' key={index}>
                                    <Flex justify='between'>
                                        <Flex justify='between'>

                                            <img src={'http://129.211.169.131:33833' + item.imgs} style={{ width: '90px', height: '120px' }}></img>
                                            <Flex direction='column' style={{ textAlign: 'left' }}>
                                                <WingBlank size="lg">
                                                    <div className='head'>{item.name}</div>
                                                    <div>{item.area} {item.range}</div>
                                                    <span>{item.type} {item.point}平</span>
                                                </WingBlank>
                                            </Flex>
                                        </Flex>
                                        <strong style={{ color: 'red', fontSize: '18px' }}>{item.price}/平</strong>
                                    </Flex>
                                    <WhiteSpace size="lg" />
                                </div>
                            })
                        }

                    </WingBlank>
                </div>
            </div>
        )
    }

    // 单机头部跳转
    clickTitle(val){
        window.location.href = val
    }
    componentDidMount = () => {
        gethouselist().then((res) => {
            console.log(res);
            this.setState({
                houseList: res.data
            })
        })
    }
}
