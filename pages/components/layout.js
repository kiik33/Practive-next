import Head from 'next/head';
import Link from 'next/link';

export default ({children}) => (
    <div>
        <Head>
             <title>共通头部测试-next教程</title>
        </Head>
        <div>
            <Link href="/">主页</Link> |
            <Link href="/list">列表</Link> |
            <Link href="/nestStyle">内联样式</Link>  
        </div>
        {children}
        <footer>
            2019,版权所有
        </footer>
    </div>
)