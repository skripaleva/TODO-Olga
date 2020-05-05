import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import './App.css';

const todoItem = 'Покормить кота';

const App = () => {
	const items = [
		{value: 'Покормить кота'},
		{value: 'Сходить на работу'},
		{value: 'Полить цветы'}
	];

return (
	<div className='wrap'>
		<h1 className='wrap__title'>Список дел на сегодня:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count= {3} />
	</div>);
}

export default App; 