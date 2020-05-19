import React, { Component } from 'react'

export default class Recommend extends Component {
    render() {
        return (
            <div>
                <div id="container" style={{ width: '100%', height: 255 }}>a</div>
            </div>
        )
    }

    componentDidMount() {
        var map = new window.AMap.Map("container", {
            resizeEnable: true, //地图是否可以重置大小
            center: [116.397428, 39.90923], //以哪个经纬度为中心点开始绘制
            zoom: 13    //地图默认缩放比
        });
    }
}
