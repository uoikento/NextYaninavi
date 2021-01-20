import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <p> hello world</p>
    <ul>
      <PostLink title="Hello Next.js"/>
      <PostLink title="Learn" />
    </ul>
  </Layout>
);