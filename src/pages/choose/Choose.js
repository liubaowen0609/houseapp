import React, { Component } from 'react'
import chooseJson from '../../json/choose.json'
import './choose.scss'
import BScroll from 'better-scroll'


export default class Choose extends Component {

    componentDidMount() {
        //选中DOM中定义的 .wrapper 进行初始化
        this.scroll = new BScroll('#father', {
            click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
        }
        )
    }

    render() {
        return (
            <div id='father'>
                <div className='cityList'>
                    <p className='headTiltle'>选择城市</p>
                    <p>当前定位</p>
                    <div>重庆</div>
                    <p>热门城市</p>
                    {
                        chooseJson.hotCity.map((i) =>
                            <div key={i} >{i}</div>
                        )
                    }
                    {
                        chooseJson.generalCity.map((i) =>
                            <span>
                                <p key={i.name} id={i.name}>{i.name}</p>
                                {
                                    i.list.map((v) =>
                                        <div key={v}>{v}</div>
                                    )
                                }
                            </span>
                        )
                    }

                </div>
                <div className='nav'>
                    {
                        chooseJson.generalCity.map((i, index) =>
                            <p key={index} onClick={this.clickRihgt.bind(this,i.name)}>{i.name}</p>
                        )
                    }
                </div>
            </div>
        )
    }
    clickRihgt(val){
        this.scroll.scrollToElement('#'+val,300)
    }

}
