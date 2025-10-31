import styles from './internship.module.css';

export function Internships() {
  const portals = [
    {
      id: 1,
      name: 'Internship Portal A',
      image: 'i1.png',
      howToRegister: 'Sign up using your university email.',
      link: 'https://portalA.com'
    },
    {
      id: 2,
      name: 'Internship Portal B',
      image: 'i2.png',
      howToRegister: 'Create an account and complete your profile.',
      link: 'https://portalB.com'
    },
    {
      id: 3,
      name: 'Internship Portal C',
      image: 'i3.png',
      howToRegister: 'Register using your student ID number.',
      link: 'https://portalC.com'
    }
  ];

  return (
    <div className={styles.internshipContainer}>
      {portals.map((portal) => (
        <div className={styles.internshipCard} key={portal.id}>
          <img src={portal.image} alt={portal.name} className={styles.internshipImage} />
          <h3 className={styles.internshipTitle}>{portal.name}</h3>
          <p className={styles.internshipDesc}>{portal.howToRegister}</p>
          <a
            href={portal.link}
            className={styles.internshipLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to Portal
          </a>
        </div>
      ))}
    </div>
  );
}
