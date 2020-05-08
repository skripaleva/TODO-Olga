import React from 'react';
import styles from './Footer.module.css';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const Footer = ({ count }) => 
<div className={styles.wrap}>
<Button variant="contained">Осталось: {count}</Button>
        <div>
            <ButtonGroup variant="contained">
                <Button>Все</Button>
                <Button>Активные</Button>
                <Button>Выполненные</Button>
            </ButtonGroup>
        </div>
        <Button variant="contained">Удалить все</Button>
    </div>;

export default Footer;