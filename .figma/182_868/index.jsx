import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.artists2}>
      <img src="../image/mop46jr5-34pvxlr.png" className={styles.statusBar} />
      <div className={styles.autoWrapper}>
        <div className={styles.lIbrary}>
          <img src="../image/mop46jr7-t8iusr5.png" className={styles.musiumLogo} />
          <p className={styles.yourLibrary}>Your Library</p>
        </div>
        <img
          src="../image/mop46jr5-24qy0ev.svg"
          className={styles.interfaceSearch}
        />
      </div>
      <div className={styles.filter}>
        <div className={styles.rectangle37}>
          <p className={styles.folders}>Folders</p>
        </div>
        <div className={styles.rectangle372}>
          <p className={styles.playlists}>Playlists</p>
        </div>
        <div className={styles.rectangle373}>
          <p className={styles.artists}>Artists</p>
        </div>
        <div className={styles.rectangle374}>
          <p className={styles.albums}>Albums</p>
        </div>
        <div className={styles.rectangle375}>
          <p className={styles.podcasts}>Podcasts</p>
        </div>
      </div>
      <div className={styles.group25}>
        <div className={styles.sort}>
          <img src="../image/mop46jr5-t7vl4gd.png" className={styles.arrowLeftMd} />
          <img
            src="../image/mop46jr5-xlu86cc.png"
            className={styles.arrowLeftMd2}
          />
        </div>
        <div className={styles.autoWrapper2}>
          <p className={styles.sortBy3}>
            <span className={styles.sortBy}>Sort By</span>
            <span className={styles.sortBy2}>&nbsp;</span>
          </p>
          <p className={styles.recentlyPlayed}>Recently played</p>
        </div>
      </div>
      <div className={styles.autoWrapper5}>
        <div className={styles.group36}>
          <div className={styles.cone}>
            <img src="../image/mop46jr7-u17f61o.png" className={styles.image6} />
            <p className={styles.conanGray}>Conan Gray</p>
          </div>
          <div className={styles.group33}>
            <div className={styles.ca}>
              <img src="../image/mop46jr7-ykhsdgy.png" className={styles.image6} />
              <p className={styles.conanGray}>Chase Atlantic</p>
            </div>
            <div className={styles.b}>
              <img
                src="../image/mop46jr7-raptlap.png"
                className={styles.rectangle30}
              />
              <p className={styles.beabadoobee}>beabadoobee</p>
            </div>
            <div className={styles.nj}>
              <img src="../image/mop46jr7-4fjeluc.png" className={styles.image6} />
              <p className={styles.conanGray}>New Jeans</p>
            </div>
            <div className={styles.kesh}>
              <img src="../image/mop46jr7-k34qa5t.png" className={styles.image6} />
              <p className={styles.keshi}>keshi</p>
            </div>
          </div>
          <div className={styles.cone2}>
            <img src="../image/mop46jr7-u17f61o.png" className={styles.image6} />
            <p className={styles.conanGray}>Conan Gray</p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className={styles.rectangle36}>
            <div className={styles.autoWrapper3}>
              <img
                src="../image/mop46jr5-a23200a.svg"
                className={styles.interfaceHome3}
              />
              <p className={styles.home}>Home</p>
            </div>
            <p className={styles.explore}>Explore</p>
            <div className={styles.autoWrapper4}>
              <img
                src="../image/mop46jr5-j2jlaly.svg"
                className={styles.interfaceFolderUi}
              />
              <p className={styles.library}>Library</p>
            </div>
          </div>
          <img
            src="../image/mop46jr5-f2yhed4.png"
            className={styles.interfaceSearch2}
          />
        </div>
      </div>
    </div>
  );
}

export default Component;
