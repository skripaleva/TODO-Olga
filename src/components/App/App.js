import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


class App extends React.Component {
	state = {
		items: [
			{
				value: 'Покормить кота',
				isDone: true
			},
			{
				value: 'Сходить на работу',
				isDone: false
			},
			{
				value: 'Полить цветы',
				isDone: true
			}
		]
	};

render() {
	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Список дел на сегодня:</h1>
			<InputItem />
			<ItemList items={this.state.items} />
			<Footer count= {1} />
		</div>);
	}
};

export default App; 