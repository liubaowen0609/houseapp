import React, { Component } from 'react'

export default class City extends Component {
    render() {
        return (
            <div>
                <div id="container" style={{ width: '90%', height: 255,margin:'auto' }}></div>
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("container", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
         //实例化城市查询类
         var citysearch = new window.AMap.CitySearch();
         //自动获取用户IP，返回当前城市
         citysearch.getLocalCity(function(status, result) {
             if (status === 'complete' && result.info === 'OK') {
                 if (result && result.city && result.bounds) {
                     var cityinfo = result.city;
                     var citybounds = result.bounds;
                     console.log(cityinfo);
                     //地图显示当前城市
                     map.setBounds(citybounds);
                 }
             } else {
                 console.log(result.info);
                  
             }
         });
    }
}
