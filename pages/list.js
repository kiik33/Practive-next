import React, {Component} from 'react';
import Layout from './components/layout'
import '../styles/list.css';
import Router from 'next/router'

export default class List extends Component {
    state = {
        list: ["next.js","@zeit/next-css","finall attack"]
    }
    render(){
        return (
            <Layout>
            <div>
                <ul>
                    {
                        this.state.list.map(item =>(
                            <li onClick={() => Router.push('/detail?arg=' + item)}>{item}</li>
                        ))
                    }
                </ul>
            </div>
            </Layout>
        )
    }
}