import React, { FC } from 'react';
import styles from './NotificationPage.module.scss';

interface NotificationPageProps {}

const NotificationPage: FC<NotificationPageProps> = () => (
  <div className={styles.NotificationPage}>
    NotificationPage Component
  </div>
);

export default NotificationPage;
