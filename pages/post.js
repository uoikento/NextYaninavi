import { withRouter } from 'next/router'
import Layout from '../components/MyLayout.js'

const Page = withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <p>this is blog</p>
  </Layout>
));

export default Page;