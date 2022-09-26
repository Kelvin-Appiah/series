import styles from './tabs.module.css';

export default function Tabs({ types, typeFunction }) {
  return (
    <div className={styles.tabsContainer}>
      {types.map((type, index) => {
        return (
          <button
            key={index}
            onClick={() => typeFunction(type)}
            className={styles.btns}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
}
