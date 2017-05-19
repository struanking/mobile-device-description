import Link from 'next/link'
import Head from 'next/head'
import Header from './Header'
import Main from './Main'

const Layout = ({ children, title = 'This is the default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>

    <Header />

    <Main>
      { children }
    </Main>

    <div id="sidebar">Sidebar</div>

    <footer role="contentinfo">2017</footer>
  </div>
)

export default Layout
