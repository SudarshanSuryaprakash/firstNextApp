import classes from './event-logistics.module.css';
import LogisticsItem from './logistics-item';

import Image from 'next/image';

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  console.log(date);
  //const addressText = address.replace(', ', '\n');
  const addressText = address;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
        <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem>
          <address>{addressText}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default EventLogistics;
