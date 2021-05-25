import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/event-list';

const FilteredEventsPage = (props) => {
  const router = useRouter();
  // const filterData = router.query.slug;
  // if (!filterData) return <p>Loading...</p>;

  // const numYear = +filterData[0];
  // const numMonth = +filterData[1];

  if (props.hasError) {
    return <p>Invalid Filter. Adjust values.</p>;
  }

  const { filteredEvents } = props;

  if (!filteredEvents || !filteredEvents.length) {
    return <p>No events found for this filter</p>;
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

  const numYear = +filterData[0];
  const numMonth = +filterData[1];

  if (isNaN(numYear) || isNaN(numMonth)) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  return {
    props: {
      filteredEvents,
    },
  };
};

export default FilteredEventsPage;
