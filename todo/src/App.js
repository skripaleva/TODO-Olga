import React from 'react';

const ItemList = () => (<ul> 
	<li>1</li>
	<li>2</li>
	<li>3</li>
</ul>);

const App = () => (<div>
	<p>Запланированные дела:</p>
	<ItemList />
</div>);

export default App;