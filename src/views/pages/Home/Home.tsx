import banner from '../../assets/home_banner.png';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section
      className={styles.heroImg}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
      }}
    >
      <div className={styles.heroTxt}>
        <h1>Lorem ipsum</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          harum neque aliquam ducimus aut alias soluta commodi, libero vero
          illum ad quia dolores placeat facilis quibusdam rem praesentium
          repellendus consectetur?
        </p>
      </div>
    </section>
  );
};

export default Home;
