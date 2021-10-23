import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Footer from '../components/Footer';

export default function Home({ launches }) {
  return (
    <div>
      <Head>
        <title>SpaceX</title>
      </Head>

      <Header />

      <main className='m-10'>
        <h1 className='ml-2 text-gray-400 font-semibold'>
          Latest launches from SpaceX:
        </h1>

        <div className='items-center'>
          <div className='grid grid-cols-2'>
            {launches?.map(launch => {
              return (
                <InfoCard launch={launch} />
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps() {

  const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql',
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetLaunches {
        launchesPast(limit: 10) {
          id
          mission_name
          launch_date_local
          launch_site {
            site_name_long
          }
          links {
            article_link
            video_link
            mission_patch
          }
          rocket {
            rocket_name
          }
        }
      }
    `
  });

  return {
    props: {
      launches: data?.launchesPast
    }
  }
}
