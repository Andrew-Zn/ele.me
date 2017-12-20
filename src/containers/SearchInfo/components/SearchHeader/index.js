import React,{Component} from 'react';
import './index.less';
import {connect} from 'react-redux';
import  actions from '../../../../store/actions/searchInfo'
import  WebStorageCache from 'web-storage-cache'
import {Link} from 'react-router-dom'
class SearchHeader extends Component{
    constructor () {
        super();
        this.wsCache = "";
        this.state = {
            valuse:""
        }
    }
    handlValueChange(event){
        this.setState({valuse:event.target.value})


    }
    setTime(date){//设置超市秒数
        let date1 = null;
        if(date){//如果传递描述，就在当前时间家秒数
             date1 = new Date();
            date1 = new Date(date1.getTime() + 1000*date);
        }else{//如果没传递就用默认值
             date1= '2018/12/24 13:55:00';
             date1= new Date(date1)
        }
        let date2 = new Date();    //开始时间时间
        let  date3 =  date1.getTime() - date2.getTime();   //时间差的毫秒数
        return date3/1000
    }
    launch() {
        this.props.ajaxSearch(this.state.valuse);
        //下面逻辑设置搜索数据缓存的
        this.wsCache = new WebStorageCache();
        let  opt = this.wsCache.get('searchData');
        let Time = this.setTime(100000);//秒，可以统一设置超时时间，切每次搜索新的次，都会重新设置时间，如果不写参数默认一年过期
        if(opt == null && !this.state.valuse.match(/^\s*$/) ){// 用正则匹配不是空的或空格
            opt = [this.state.valuse];
            this.wsCache.set('searchData', opt, {exp : Time});//exp设置超时秒数，按照秒来算
        }else if(opt.length<10 && !this.state.valuse.match(/^\s*$/) ){//如果有数据，切数据不足十条！
            if(opt.indexOf(this.state.valuse) != -1){//如果有重复的
                opt= opt.filter((item,index)=>item!=this.state.valuse)//去除重复的
            }
            opt = [this.state.valuse,...opt];
            this.wsCache.set('searchData', opt, {exp : Time})

        }else if(!this.state.valuse.match(/^\s*$/)){//数据为10条时候，默认缓存就10条
            if(opt.indexOf(this.state.valuse) != -1){//如果有重复的就删掉重复的
                opt= opt.filter((item,index)=>item!=this.state.valuse)
            }else{//如果没有重的删除最后一条
                opt.pop();//删除多余的一条
            }
            opt.unshift(this.state.valuse)//把搜索的数据插入数组最前面
            this.wsCache.set('searchData', opt, {exp : Time})
        }

    }
    render(){
        return (
            <div>
                <section className="search-list-input">
                    <form className="search-list-input-form" >
                        <i className="iconfont icon-sousuo"></i>
                        <input type="search" autoFocus placeholder="输入商家、商品名称" className="app-11zxJ_1" name="value" value={this.state.valuse} onChange={this.handlValueChange.bind(this)}/>
                        <Link to="/home/list">
                            <button type="submit"  onClick={this.launch.bind(this)} className="search-list-input-button">
                                搜索
                            </button>
                        </Link>
                    </form>
                </section>
            </div>
        )
    }
}
export default connect(
    state => state.searchInfo,//把仓库中的状态对象映射为组件的属性对象
    actions
)(SearchHeader);