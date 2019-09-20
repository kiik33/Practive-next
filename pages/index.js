// import React, {Component} from 'react'

// export default class Index extends Component{
//     render(){
//         return(
//             <div>
//             <h1>next.js</h1>
//             <h2>@zeit/next-css</h2>
//             <h3>finall attack</h3>
//         </div>
//         )
        
//     }
// }
import Layout from './components/layout'
import '../styles/index.sass';

export default ()=> (
    <Layout>
    <div>
        <h1>this is next.js</h1>
    </div>
    </Layout>
)