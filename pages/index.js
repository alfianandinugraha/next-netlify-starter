import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect } from 'react'

export default function Home(props) {

  useEffect(() => {
    console.log(props.posts)
  }, [props.posts])

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps = async () => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  return {
    props: {
      posts
    }
  }
}
