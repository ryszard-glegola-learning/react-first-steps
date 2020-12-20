import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import List from '../List/List.js';
// import Hero from '../Hero/Hero.js';

class Column extends React.Component {
  static propTypes = {
    columnTitle: PropTypes.node,
    children: PropTypes.node,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <h2 className={styles.title}>{this.props.columnTitle}</h2>
      </section>
    )
  }
}

export default Column;
