import React,{Component,PropTypes} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {ArticleListCell} from "../articleListCell/ArticleListCell";

export default class ArticleList extends Component{
    constructor(props){
        super(props);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    }

    render(){
        return(
            <div>
                {
                    this.props.data.map((item,index)=>(
                        <ArticleListCell key={index} data={item}/>
                    ))
                }
            </div>
        )
    }
}