import { getSession } from 'next-auth/client'
import Head from 'next/head'
import Feed from '../components/feed';
import Header from '../components/Header'
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

export default function Home({ session, posts }) {
  if (!session) return <Login/>;
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title> Facebook 2.0 </title>
      </Head>
      {/* Header */}
      <Header/>

      <main className="flex">
        {/* Sidebar */}
        <Sidebar/>

        {/* feed */}
        <Feed posts={posts}/>

        {/* Widgets */}
        <Widgets/>
      </main>
     
    </div>
  )
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  // pre fetch the posts
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  // Transform the information
  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null, //Don't fetch timestamp
  }));

  return {
    props: {
      session,
      posts: docs,
    }
  }
}