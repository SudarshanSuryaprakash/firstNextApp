import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';
import Head from 'next/head';

const HomePage = ({ featuredEvents }) => {
  return (
    <div>
      <Head>
        <title>Next.js Practice</title>
        <meta
          name='description'
          content='This is the content for the meta tag'
        />
      </Head>
      <EventList items={featuredEvents} />
    </div>
  );
};

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};

export default HomePage;
