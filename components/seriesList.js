import Series from './series';
import styles from './seriesList.module.css';

export default function SeriesList({ series }) {
  return (
    <article className={styles.seriesContainer}>
      {series.map((serie) => (
        <Series key={serie.id} {...serie} />
      ))}
    </article>
  );
}
