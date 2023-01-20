import React from 'react';
import { FloatingList, Header, MainContents } from '@/components';
import '@/scss/index.scss';

export default class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Header />
        <MainContents />
        <FloatingList />
      </div>
    );
  }
}
