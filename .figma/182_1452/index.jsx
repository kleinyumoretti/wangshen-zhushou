import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.logIn}>
      <img src="../image/mop46joe-new02m7.png" className={styles.statusBar} />
      <div className={styles.autoWrapper}>
        <img src="../image/mop46joe-neka6um.svg" className={styles.arrowLeftMd} />
        <img src="../image/mop46jof-hsdcp2s.png" className={styles.musiumLogo} />
      </div>
      <p className={styles.loginToYourAccount}>Login to your account</p>
      <div className={styles.a2Button}>
        <p className={styles.google}>Email</p>
        <img src="../image/mop46joe-40cizhk.svg" className={styles.mail} />
      </div>
      <div className={styles.a2Button2}>
        <img src="../image/mop46joe-a36mtos.svg" className={styles.lock} />
        <p className={styles.fb}>Password</p>
        <img
          src="../image/mop46joe-vf8vz5c.svg"
          className={styles.interfaceEyeOff}
        />
      </div>
      <div className={styles.rem}>
        <div className={styles.rectangle39} />
        <p className={styles.fb2}>Remember me</p>
      </div>
      <div className={styles.blueButton}>
        <p className={styles.logInWPw}>Log in&nbsp;</p>
      </div>
      <p className={styles.a}>Forgot the password?</p>
      <div className={styles.or2}>
        <p className={styles.or}>or continue with</p>
        <div className={styles.line1} />
        <div className={styles.line2} />
      </div>
      <div className={styles.autoWrapper2}>
        <div className={styles.google2}>
          <img src="../image/mop46jof-yxax3d8.png" className={styles.google1} />
        </div>
        <img src="../image/mop46joe-ibk7hl0.png" className={styles.fb3} />
        <div className={styles.apple}>
          <img src="../image/mop46jof-hb7asp5.png" className={styles.e11} />
        </div>
      </div>
      <p className={styles.donTHave3}>
        <span className={styles.donTHave}>Don’t have an account?&nbsp;</span>
        <span className={styles.donTHave2}>Sign Up</span>
      </p>
    </div>
  );
}

export default Component;
