import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import './nav.scss';
import Home from './home/Home ';
import Chat from './Chat/Chat'
import Recommend from './recommend/Recommend';
import My from './my/My';

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Home',
    }
  }
  renderContent(pageText) {
    return (
      <div>
          
      </div>
    );
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { position: 'fixed', height: '100%', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494" //未选择的颜色
          tintColor="#33A3F4" //选中的字体颜色
          barTintColor="white" //背景色
          hidden={this.state.hidden}
          tabBarPosition="bottom"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
            }}
            />
            }
            selected={this.state.selectedTab === 'Home'}
            onPress={() => {
              this.setState({
                selectedTab: 'Home',
              });
            }}
            data-seed="logId"
          >
            <Home></Home>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="微聊"
            key="Chat"
            selected={this.state.selectedTab === 'Chat'}
            onPress={() => {
              this.setState({
                selectedTab: 'Chat',
              });
            }}
            data-seed="Chat"
          >
            <Chat></Chat>
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
              }}
              />
            }
            title="推荐"
            key="Recommend"
            selected={this.state.selectedTab === 'Recommend'}
            onPress={() => {
              this.setState({
                selectedTab: 'Recommend',
              });
            }}
          >
            <Recommend></Recommend>
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'My'}
            onPress={() => {
              this.setState({
                selectedTab: 'My',
              });
            }}
          >
            <My></My>
          </TabBar.Item>
        </TabBar>
      </div>
    )
  }
}
