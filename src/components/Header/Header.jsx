import React from 'react';
import { format } from 'date-fns';
import styles from './Header.module.scss';
import Logo from './../../assets/images/logo.png';
import User from './../../assets/images/user.png';

function Header() {
  const date = format(new Date(), 'eeee MMMM Do');
  return (
    <div className={styles.wrap}>
      <div className={styles.left}>
        <img src={Logo} alt='logo' />
        <p>{date}</p>
      </div>
      <div className={styles.right}>
        <button className={styles.search}></button>
        <div className={styles.user}>
          <img src={User} alt='user' />
        </div>
      </div>
    </div>
  );
}

export default Header;
