import styles from './series.module.css';

import Image from 'next/image';
import { useState } from 'react';

export default function Series({ image, title, duration, summary }) {
  const [readMoreMode, setReadMoreMode] = useState(false);

  return (
    <div className={styles.seriesItem}>
      <Image src={image} alt={title} width={399} height={350} />
      <header className={styles.header}>
        <h1>{title}</h1>
        <h3>{duration}</h3>
      </header>
      <p className={styles.summary}>
        {readMoreMode ? summary : `${summary.substring(0, 140)}...`}
        <button
          className={styles.readAllBtn}
          onClick={() => setReadMoreMode(!readMoreMode)}
        >
          {readMoreMode ? ` show less` : 'read all'}
        </button>
      </p>

      <button className={styles.btn}>Watch Now</button>
    </div>
  );
}
