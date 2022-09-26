import styles from '../styles/Home.module.css';
import { useState } from 'react';
import Tabs from '../components/tabs';

import data from '../data';
import SeriesList from '../components/seriesList';

let categories = ['all', ...new Set(data.map((data) => data.type))];

export default function Home() {
  const [dataItems, setDataItems] = useState(data);

  /* const [itemTypes, setItemTypes] = useState(categories); */

  const switchTypes = (type) => {
    if (type === 'all') {
      return setDataItems(data);
    }
    return setDataItems(data.filter((data) => data.type === type));
  };

  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Squishy Series</h1>
      <div className={styles.line}></div>
      <Tabs types={categories} typeFunction={switchTypes} />
      <SeriesList series={dataItems} />
    </section>
  );
}
