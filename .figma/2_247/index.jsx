import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.darkButtonsCta}>
      <img src="../image/mor0a9y1-l5uwkhg.svg" className={styles.f} />
      <p className={styles.colorfulStrokesAndSh3}>
        <span className={styles.colorfulStrokesAndSh}>
          Colorful strokes and shadows
          <br />
        </span>
        <span className={styles.colorfulStrokesAndSh2}>Dark buttons</span>
      </p>
      <div className={styles.autoWrapper}>
        <div className={styles.group8}>
          <div className={styles.card}>
            <p className={styles.startANewProject}>Start a new project</p>
          </div>
        </div>
        <div className={styles.group9}>
          <div className={styles.card2}>
            <p className={styles.startANewProject}>Quickstart Guide</p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.group10}>
          <div className={styles.card3}>
            <p className={styles.startANewProject}>Download for Win or Mac</p>
          </div>
        </div>
        <div className={styles.group7}>
          <div className={styles.card4}>
            <p className={styles.startANewProject}>Create a free project&nbsp;</p>
          </div>
        </div>
      </div>
      <p className={styles.designedForTheFigmaC}>
        Designed for the Figma Community
      </p>
    </div>
  );
}

export default Component;
