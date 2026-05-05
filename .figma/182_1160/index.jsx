import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.stats}>
      <img src="../image/mop46jq1-0h5xzvz.png" className={styles.statusBar} />
      <div className={styles.autoWrapper}>
        <img src="../image/mop46jq1-oqpz8yp.svg" className={styles.arrowLeftMd} />
        <p className={styles.top3}>
          <span className={styles.top}>To</span>
          <span className={styles.top2}>p</span>
        </p>
        <img src="../image/mop46jq1-7jsq5o5.svg" className={styles.interfaceMenu} />
        <img
          src="../image/mop46jq1-hibfovo.svg"
          className={styles.interfaceAddLg}
        />
      </div>
      <p className={styles.past30Days}>Past 30 Days</p>
      <div className={styles.autoWrapper2}>
        <p className={styles.tracks}>Tracks</p>
        <p className={styles.artists}>Artists</p>
        <p className={styles.albums}>Albums</p>
      </div>
      <div className={styles.line9} />
      <div className={styles.rectangle45}>
        <p className={styles.a1}>#1</p>
        <div className={styles.group10}>
          <img src="../image/mop46jq4-82s1wfn.png" className={styles.rectangle30} />
          <div className={styles.autoWrapper3}>
            <p className={styles.swim}>Swim</p>
            <p className={styles.chaseAtlantic}>Chase Atlantic</p>
          </div>
        </div>
      </div>
      <div className={styles.rectangle452}>
        <p className={styles.a1}>#2</p>
        <div className={styles.group10}>
          <img src="../image/mop46jq4-2p3rikw.png" className={styles.rectangle30} />
          <div className={styles.autoWrapper3}>
            <p className={styles.swim}>Time</p>
            <p className={styles.chaseAtlantic}>NF</p>
          </div>
        </div>
      </div>
      <div className={styles.autoWrapper4}>
        <div className={styles.a3}>
          <div className={styles.rectangle453}>
            <p className={styles.a1}>#3</p>
            <div className={styles.group10}>
              <img
                src="../image/mop46jq4-4lomser.png"
                className={styles.rectangle30}
              />
              <div className={styles.autoWrapper3}>
                <p className={styles.swim}>Movies</p>
                <p className={styles.chaseAtlantic}>Conan Gray</p>
              </div>
            </div>
          </div>
          <div className={styles.a23}>
            <div className={styles.rectangle454}>
              <p className={styles.a1}>#4</p>
              <div className={styles.group10}>
                <img
                  src="../image/mop46jq4-5c7s7l5.png"
                  className={styles.rectangle30}
                />
                <div className={styles.autoWrapper3}>
                  <p className={styles.swim}>lowkey</p>
                  <p className={styles.chaseAtlantic}>NIKI</p>
                </div>
              </div>
            </div>
            <div className={styles.a22}>
              <div className={styles.rectangle455}>
                <p className={styles.a1}>#5</p>
                <div className={styles.group10}>
                  <img
                    src="../image/mop46jq4-3pzs9sq.png"
                    className={styles.rectangle30}
                  />
                  <div className={styles.autoWrapper3}>
                    <p className={styles.swim}>Hurt</p>
                    <p className={styles.chaseAtlantic}>NewJeans</p>
                  </div>
                </div>
              </div>
              <div className={styles.a2}>
                <div className={styles.rectangle455}>
                  <p className={styles.a1}>#6</p>
                  <div className={styles.group10}>
                    <img
                      src="../image/mop46jq4-8pey4wq.png"
                      className={styles.rectangle30}
                    />
                    <div className={styles.autoWrapper3}>
                      <p className={styles.swim}>ILLUSION</p>
                      <p className={styles.chaseAtlantic}>aespa</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangle456}>
                  <p className={styles.a1}>#7</p>
                  <div className={styles.group10}>
                    <img
                      src="../image/mop46jq4-xpia5f0.png"
                      className={styles.rectangle30}
                    />
                    <div className={styles.autoWrapper3}>
                      <p className={styles.swim}>Pink Venom</p>
                      <p className={styles.chaseAtlantic}>BLACKPINK</p>
                    </div>
                  </div>
                </div>
                <div className={styles.rectangle457}>
                  <p className={styles.a1}>#8</p>
                  <div className={styles.group10}>
                    <img
                      src="../image/mop46jq4-uz3x0d7.png"
                      className={styles.rectangle30}
                    />
                    <div className={styles.autoWrapper3}>
                      <p className={styles.swim}>moods</p>
                      <p className={styles.chaseAtlantic}>11 playlists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.rectangle36}>
          <p className={styles.a30Days}>30 days</p>
          <p className={styles.a6Months}>6 Months</p>
          <p className={styles.a1Year}>1 Year&nbsp;</p>
          <p className={styles.lifetime}>Lifetime</p>
        </div>
      </div>
    </div>
  );
}

export default Component;
