import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom';
import Todo from '../Todo/Todo';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';

import styles from './App.module.css';

const App = () => (<Router>
  <div className={styles.wrap}>
    <MenuList className={styles.sidebar}>
      <Link to='/' className={styles.link}>
        <MenuItem>Обо мне</MenuItem></Link>
          <Link to='/todo' className={styles.link}>
            <MenuItem>Дела</MenuItem></Link>
          <Link to='/contacts' className={styles.link}>
            <MenuItem>Контакты</MenuItem></Link>
    </MenuList>
    <div>
      <Route path='/' exact component={About} />
      <Route path='/todo' component={Todo} />
      <Route path='/contacts' component={Contacts} />
    </div>
  </div>
</Router>);


export default App; 