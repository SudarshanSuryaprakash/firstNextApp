const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: 'Introduction Day',
    description: 'Free food and equipment',
    location: 'Form 12 Hook',
    date: '2021-07-05',
    image: 'images/elanco.png',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: 'Programming for everyone',
    description: "It's easy",
    location: 'Form 12 Hook',
    date: '2021-07-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e3',
    title: 'Networking for introverts',
    description: 'Do it',
    location: 'Form 12 Hook',
    date: '2021-08-15',
    image: 'images/wolf.jpg',
    isFeatured: true,
  },
  {
    id: 'e4',
    title: 'Networking for extroverts',
    description: "Don't over do it",
    location: 'Form 12 Hook',
    date: '2022-08-20',
    image: 'images/network.jpg',
    isFeatured: true,
  },
];

export function getFeaturedEvents() {
  return DUMMY_EVENTS.filter((event) => event.isFeatured);
}

export function getAllEvents() {
  return DUMMY_EVENTS;
}

export function getFilteredEvents(dateFilter) {
  const { year, month } = dateFilter;

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function getEventById(id) {
  return DUMMY_EVENTS.find((event) => event.id === id);
}
