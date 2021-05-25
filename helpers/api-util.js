export const getAllEvents = async () => {
  const response = await fetch(
    'https://nextjs-1d0c8-default-rtdb.firebaseio.com/events.json'
  );
  const data = await response.json();
  const events = [];
  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }
  return events;
};

export const getFeaturedEvents = async () => {
  const allEvents = await getAllEvents();
  const featuredEvents = allEvents.filter((event) => event.isFeatured);
  return featuredEvents;
};

export const getEventById = async (eventId) => {
  const allEvents = await getAllEvents();
  const arr = allEvents.filter((event) => event.id === eventId);
  return arr[0];
};

export async function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;
  const allEvents = await getAllEvents();

  let filteredEvents = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}
