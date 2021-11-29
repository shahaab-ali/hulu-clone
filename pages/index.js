import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Result from '../components/Result'
import request from '../utils/request'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Result results={results} />

    </div>
  )
}

export async function getServerSideProps(context){
  const genres = context.query.genres;

  const requests = await fetch(`https://api.themoviedb.org/3${request[genres]?.url || request.fetchTrending.url}`
  ).then((res) => res.json());

  return{
    props: {
      results: requests.results,
    },
  };
}
