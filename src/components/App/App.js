import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const todoItem = 'Покормить кота';

const App = () => {
	const items = [
		{value: 'Покормить кота'},
		{value: 'Сходить на работу'},
		{value: 'Полить цветы'}
	];

return (
	<div className={styles.wrap}>
		<h1 className={styles.title}>Список дел на сегодня:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count= {3} />
	</div>);
}

export default App; 