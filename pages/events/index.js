import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';

import EventsSearch from '../../components/events/events-search';
import { Fragment } from 'react';
import { useRouter } from 'next/router';

const AllEventsPage = ({ events }) => {
  const router = useRouter();

  const findEventsHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Fragment>
        <EventsSearch onSearch={findEventsHandler} />
        <EventList items={events} />
      </Fragment>
    </div>
  );
};

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
  };
};

export default AllEventsPage;
