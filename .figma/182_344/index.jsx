import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.song}>
      <img src="../image/mop46js7-xs644jz.png" className={styles.statusBar} />
      <div className={styles.autoWrapper}>
        <div className={styles.fRomplaylist}>
          <p className={styles.lofiLoft}>Lofi Loft</p>
          <img
            src="../image/mop46js7-jnypbzv.svg"
            className={styles.arrowChevronDown}
          />
          <p className={styles.pLayingfromplaylist}>PLAYING FROM PLAYLIST:</p>
        </div>
        <img
          src="../image/mop46js7-xfyo6hv.png"
          className={styles.interfaceOption}
        />
      </div>
      <img src="../image/mop46js9-wuygt8v.png" className={styles.rectangle19} />
      <p className={styles.grainyDays}>grainy days</p>
      <div className={styles.autoWrapper2}>
        <p className={styles.moody}>moody.</p>
        <img
          src="../image/mop46js7-fq4bhxc.svg"
          className={styles.interfaceShare}
        />
        <img src="../image/mop46js7-jhajb6n.svg" className={styles.interfaceLove} />
      </div>
      <div className={styles.autoWrapper3}>
        <div className={styles.line4} />
        <img src="../image/mop46js7-k205i41.svg" className={styles.union} />
      </div>
      <div className={styles.autoWrapper7}>
        <div className={styles.autoWrapper4}>
          <p className={styles.a000}>0:00</p>
          <img
            src="../image/mop46js7-716c24m.svg"
            className={styles.interfaceRefreshSqua}
          />
        </div>
        <div className={styles.musicShuffle}>
          <img src="../image/mop46js9-lj5hdre.png" className={styles.image1} />
          <div className={styles.ellipse3} />
        </div>
        <img src="../image/mop46js7-bmw28ig.svg" className={styles.union2} />
        <div className={styles.autoWrapper5}>
          <div className={styles.ellipse2} />
          <img
            src="../image/mop46js7-dnakito.png"
            className={styles.designTriangle}
          />
        </div>
        <img src="../image/mop46js7-xpi2ujr.svg" className={styles.union3} />
        <img
          src="../image/mop46js7-izetuuw.svg"
          className={styles.musicEqualizer}
        />
        <div className={styles.autoWrapper6}>
          <p className={styles.a000}>2:43</p>
          <img
            src="../image/mop46js7-enlflam.svg"
            className={styles.interfaceAddLg}
          />
        </div>
      </div>
      <div className={styles.autoWrapper8}>
        <img
          src="../image/mop46js7-peoe9o8.svg"
          className={styles.technologyMonitor}
        />
        <img
          src="../image/mop46js7-0oij8gj.svg"
          className={styles.interfaceDownload}
        />
        <img
          src="../image/mop46js7-rbc6hx7.svg"
          className={styles.musicInstrumentPlayl}
        />
      </div>
      <p className={styles.lYrics}>LYRICS</p>
      <div className={styles.autoWrapper9}>
        <div className={styles.blueBox}>
          <p className={styles.youNeverLookAtTheSky}>
            You never look at the sky
            <br />
            Cause you think it's too high
            <br />
            You never look at the stars
            <br />
            Cause you think they're too far
            <br />
            But they're showing the lights to the way back home
            <br />
            When you don't know where to go
          </p>
        </div>
        <div className={styles.blackGradient} />
      </div>
    </div>
  );
}

export default Component;
