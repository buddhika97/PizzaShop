import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            THE FIRST BITE WILL BLOW YOUR MIND. THE SECOND WILL TRANSPORT YOU TO ANOTHER DIMENSION.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            1654 Temple Rd #235.
            <br /> Digana, Rajawella
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            2356 Temple Rd #235.
            <br /> Digana, Rajawella
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1614 Temple Rd #235 .
            <br /> Digana, Rajawella
            <br /> (602) 867-1010
          </p>
          <p className={styles.text}>
            1614 Temple Rd #235 .
            <br /> Digana, Rajawella
            <br /> (602) 867-1010
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;