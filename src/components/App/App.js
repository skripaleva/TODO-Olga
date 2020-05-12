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
				isDone: true,
				id: 1
			},
			{
				value: 'Сходить на работу',
				isDone: false,
				id: 2

			},
			{
				value: 'Полить цветы',
				isDone: true,
				id: 3
			}
		]
	};

onClickDone = id => {
	const newItemList = this.state.items.map(item => {
		const newItem = {...item};
		if (item.id === id) {
			newItem.isDone = !item.isDone
		}

		return newItem
	});

	this.setState({items: newItemList})
};

render() {
	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>Список дел на сегодня:</h1>
			<InputItem />
			<ItemList items={this.state.items} onClickDone={this.onClickDone} />
			<Footer count= {1} />
		</div>);
	}
};

export default App; 