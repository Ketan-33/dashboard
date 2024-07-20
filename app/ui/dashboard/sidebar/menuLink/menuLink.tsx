"use client"

import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface MenuItem {
  path: string;
  icon: ReactNode;
  title: string;
}

interface MenuLinkProps {
  item: MenuItem;
}

const MenuLink: React.FC<MenuLinkProps> = ({ item }) => {
  const pathname = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  );
}

export default MenuLink;
