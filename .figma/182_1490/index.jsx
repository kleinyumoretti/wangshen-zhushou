import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.signIn}>
      <img src="../image/mop46jqc-eg2j2k9.png" className={styles.statusBar} />
      <div className={styles.autoWrapper}>
        <img src="../image/mop46jqb-1qcho9l.svg" className={styles.arrowLeftMd} />
        <img src="../image/mop46jqc-iz402ux.png" className={styles.musiumLogo} />
      </div>
      <p className={styles.letSGetYouIn}>Let’s get you in</p>
      <div className={styles.a2Button}>
        <p className={styles.google}>Continue with Google</p>
        <img src="../image/mop46jqc-q7dj2t1.png" className={styles.google1} />
      </div>
      <div className={styles.fb2}>
        <div className={styles.a2Button2} />
        <p className={styles.fb}>Continue with Facebook</p>
        <img src="../image/mop46jqc-8uw7291.png" className={styles.e1} />
      </div>
      <div className={styles.a2Button3}>
        <p className={styles.apple}>Continue with Apple</p>
        <img src="../image/mop46jqc-khj9chd.png" className={styles.e11} />
      </div>
      <div className={styles.or2}>
        <p className={styles.or}>or</p>
        <div className={styles.line1} />
        <div className={styles.line2} />
      </div>
      <div className={styles.blueButton}>
        <p className={styles.or}>Log in with a password</p>
      </div>
      <p className={styles.donTHave3}>
        <span className={styles.donTHave}>Don’t have an account?&nbsp;</span>
        <span className={styles.donTHave2}>Sign Up</span>
      </p>
    </div>
  );
}

export default Component;
