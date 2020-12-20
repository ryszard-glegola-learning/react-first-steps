import React from 'react';
import Hero from '../Hero/Hero.js';
import styles from './List.scss';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    heroImagePath: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all those things whenever I want!</p>,
  }
  
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImage={this.props.heroImagePath}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
      </section>
    )
  }
}

export default List;
