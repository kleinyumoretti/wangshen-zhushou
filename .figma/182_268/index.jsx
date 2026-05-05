import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.createNew}>
      <img src="../image/mop46jol-s7bjx0f.png" className={styles.statusBar} />
      <p className={styles.newPlaylist}>New Playlist</p>
      <p className={styles.giveYourPlaylistATit}>
        Give your playlist a title&nbsp;
      </p>
      <div className={styles.line7} />
      <p className={styles.privacy}>Privacy</p>
      <div className={styles.rectangle44}>
        <p className={styles.public}>Public</p>
        <img src="../image/mop46jol-jj1tm0p.svg" className={styles.vector} />
        <img
          src="../image/mop46jol-zwn178r.svg"
          className={styles.businessAndFinanceGl}
        />
      </div>
      <div className={styles.autoWrapper}>
        <div className={styles.blueButton}>
          <p className={styles.logInWPw}>Cancel</p>
        </div>
        <div className={styles.blueButton2}>
          <p className={styles.logInWPw}>Create</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
