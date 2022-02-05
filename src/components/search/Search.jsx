import {useEffect, useState} from 'react';
import './search.css';

function Search({setSearch}) {
	let inputValue = '';
	return (
		<div className="wrap">
			<div className="search">
				<input
					type="text"
					placeholder="Rechercher une ville..."
					id="search"
					onChange={(e) => {
						inputValue = e.target.value;
					}}
				/>
			</div>
			<button
				className="searchButton"
				onClick={() => {
					setSearch(inputValue);
				}}
			>
				Rechercher
			</button>
		</div>
	);
}

export default Search;
