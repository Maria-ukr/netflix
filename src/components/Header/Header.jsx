import React from 'react';
import { format } from 'date-fns';
import styles from './Header.module.scss';
import Logo from '@/assets/images/logo.png';

function Header() {
  const date = format(new Date(), 'eeee MMMM Do');
  return (
    <div className={styles.wrap}>
      <img src={Logo} alt='logo' />
      <p>{date}</p>
    </div>
  );
}

export default Header;
