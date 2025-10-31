import styles from './herosection.module.css';

export function Herosection() {
  return (
    <div className={styles.hero}>
      <h1>
        Stuck on where to look for{' '}
        <span className={styles.gradientText}>internships?</span>
      </h1>
      <h3>
        I’ve got you covered with the best{' '}
        <span className={styles.gradientText}>platforms.</span>
      </h3>
      <button className={styles.moveButton}>Let’s get moving!</button>
    </div>
  );
}
