import EventItem from './event-item';

import classes from './event-list.module.css';

const EventList = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          location={event.location}
          image={event.image}
          date={event.date}
          key={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
