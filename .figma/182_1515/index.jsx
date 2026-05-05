import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.welcome}>
      <img src="../image/mop46jt8-2xibvo5.png" className={styles.musium} />
      <img src="../image/mop46jt7-0htq21t.png" className={styles.statusBar} />
      <div className={styles.a2Ellipse4} />
      <div className={styles.autoWrapper2}>
        <div className={styles.imgGirl}>
          <div className={styles.a2Ellipse3} />
        </div>
        <div className={styles.a2Ellipse2} />
        <div className={styles.blackBg}>
          <p className={styles.text5}>
            <span className={styles.text}>From the&nbsp;</span>
            <span className={styles.text2}>latest</span>
            <span className={styles.text}>&nbsp;to the&nbsp;</span>
            <span className={styles.text3}>greatest</span>
            <span className={styles.text}>
              &nbsp;hits, play your favorite tracks on
            </span>
            <span className={styles.text4}>musium</span>
            <span className={styles.text}>&nbsp;&nbsp;&nbsp;now!</span>
          </p>
          <div className={styles.autoWrapper}>
            <div className={styles.sliderBlue} />
            <div className={styles.sliderWhite} />
          </div>
          <div className={styles.a2Button}>
            <p className={styles.buttonText}>Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
