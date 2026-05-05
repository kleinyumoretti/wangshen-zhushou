import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.sleepTimer}>
      <img src="../image/mop46jou-y9iabbx.png" className={styles.statusBar} />
      <div className={styles.group28}>
        <p className={styles.stopAudioIn}>Stop audio in</p>
        <p className={styles.endOfTrack}>End of Track</p>
        <p className={styles.a60Seconds}>60 seconds</p>
        <p className={styles.a5Minutes}>5 minutes</p>
        <p className={styles.a10Minutes}>10 minutes</p>
        <p className={styles.a15Minutes}>15 minutes</p>
        <p className={styles.a30Minutes}>30 minutes</p>
        <p className={styles.a1Hour}>1 hour</p>
      </div>
    </div>
  );
}

export default Component;
