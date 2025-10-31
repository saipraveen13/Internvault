import styles from './navbar.module.css';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link to = '/home'>Home</Link></li>
        <li><Link to = '/internships'>Internships</Link></li>
        <li><Link to = '/resumes'>Resume</Link></li>
        <li><Link to = '/prompt'>Prompts</Link></li>
      </ul>
    </div>
  );
}
