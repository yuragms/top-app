import styles from './HhData.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import { HhDataProps } from './HhData.props';

export const HhData = ({ count }: HhDataProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.countCalue}>{count}</div>
      </Card>
      <Card className={styles.salry}>
        <div className={styles.title}>Всего вакансий</div>
        <div className={styles.salaryValue}>{count}</div>
        <div className={styles.rate}>
          <RateIcon />
          <RateIcon />
          <RateIcon />
        </div>
      </Card>
    </div>
  );
};
