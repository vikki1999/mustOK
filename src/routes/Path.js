import React ,{Component} from 'react';
import { connect } from 'dva';
import styles from './Path.css';

function Path() {
  return (
    <div className={styles.normal}>
    欢迎进入下一关
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Path);
