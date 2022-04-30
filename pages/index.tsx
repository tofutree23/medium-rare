import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <Head>
        <title>Medium rare blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className="py10 flex items-center justify-between border-y border-black bg-yellow-400 lg:py-0">
        <div className="space-y-5 px-10">
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Medium rare
            </span>
            is a place to write, read, and connect
          </h1>
          <h2>
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
        </div>
        <img
          className="hidden h-32 md:inline-flex lg:h-full"
          src="/images/medium-logo.png"
          alt="logo"
        />
      </div>
      {/* Posts */}
    </div>
  )
}

export default Home
