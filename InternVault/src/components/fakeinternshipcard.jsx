import { GoOrganization } from "react-icons/go";
import { HiBriefcase } from "react-icons/hi";
import { MdPayment } from "react-icons/md";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import styles from './fakeinternshipcards.module.css';

export function Fakeinternshipcards() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.iconWrapper}><GoOrganization /></div>
        <h3>Research the Organization</h3>
        <p>
          Always check the company's official website, read reviews, and look up
          their social media presence. Real companies have a professional online footprint.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}><HiBriefcase /></div>
        <h3>Verify the Job Offer</h3>
        <p>
          Be wary if you receive an offer too quickly, without any formal interview
          or assessment. Legitimate internships typically include clear steps like interviews and documentation.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}><MdPayment /></div>
        <h3>Never Pay Upfront Fees</h3>
        <p>
          Genuine internships do not ask you to pay for applications, training,
          or placement. If money is requested, it’s a red flag.
        </p>
      </div>

      <div className={styles.card}>
        <div className={styles.iconWrapper}><MdOutlinePermContactCalendar /></div>
        <h3>Check Contact Information</h3>
        <p>
          Trustworthy companies use professional email addresses (not free services
          like Gmail or Yahoo for official communication). If contact details look suspicious, proceed with caution.
        </p>
      </div>
    </div>
  );
}
