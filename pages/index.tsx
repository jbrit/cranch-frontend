import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cranch</title>
        <meta name="description" content="Cranch Messaging Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Welcome to Cranch!
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Cranch
      </footer>
    </div>
  )
}

export default Home
