import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.explorePage}>
      <div className={styles.autoWrapper}>
        <div className={styles.blackGradient} />
        <div className={styles.rectangle32}>
          <img
            src="../image/mop46jrv-k84kxxa.svg"
            className={styles.interfaceBrowse}
          />
          <p className={styles.songsArtistsPodcasts}>
            Songs, Artists, Podcasts & More
          </p>
        </div>
      </div>
      <div className={styles.autoWrapper5}>
        <img src="../image/mop46jrv-k88mxdf.png" className={styles.statusBar} />
        <div className={styles.group14}>
          <img src="../image/mop46jrw-1yp7u0x.png" className={styles.musiumLogo} />
          <p className={styles.search}>Search</p>
        </div>
        <p className={styles.yourTopGenres}>Your Top Genres</p>
        <img src="../image/mop46jrv-2kbrlgs.png" className={styles.top} />
        <p className={styles.browseAll}>Browse All</p>
        <div className={styles.autoWrapper4}>
          <img src="../image/mop46jrv-6ct8opj.png" className={styles.group34} />
          <div className={styles.bottomBar}>
            <div className={styles.rectangle36}>
              <div className={styles.autoWrapper2}>
                <img
                  src="../image/mop46jrv-djdyaj6.svg"
                  className={styles.interfaceHome3}
                />
                <p className={styles.home}>Home</p>
              </div>
              <p className={styles.explore}>Explore</p>
              <div className={styles.autoWrapper3}>
                <img
                  src="../image/mop46jrv-rssqzdq.svg"
                  className={styles.interfaceFolderUi}
                />
                <p className={styles.library}>Library</p>
              </div>
            </div>
            <img
              src="../image/mop46jrv-0k874aa.png"
              className={styles.interfaceSearch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component;
