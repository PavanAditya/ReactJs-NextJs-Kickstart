import styles from './HomePage.module.scss';
import nextjs from '../../../../assets/img/nextjs.gif';
import nextQuotes from '../../../../assets/img/react-next.gif';
import Image from 'next/image';

const HomePage = () => (
  <div className={styles.content}>
    <div>
      {/* <Image src={nextjs} className={styles.nextLoader} alt="Next-Js" /> */}
      <Image src={nextQuotes} className={styles.nextQuotes} alt="Next-Quotes" />
    </div>
    <span className={styles.author}>
      boiled by {' '}
      <a href={'https://pavanaditya.com'} target="_blank" rel="noreferrer" title="Pavan's Portfolio">
        <i>Pavan Aditya M S</i>
      </a>
    </span>
  </div>
);

export default HomePage;
