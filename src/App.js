import {useEffect, useState} from 'react';
import WeatherCard from './components/main/WeatherCard';
import Search from './components/search/Search';

function App() {
	const [weatherInfo, setWeatherInfo] = useState();
	const [search, setSearch] = useState('Pamiers');

	const API_KEY = process.env.REACT_APP_API_KEY;

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric&lang=FR`
		)
			.then((res) => res.json())
			.then((data) => setWeatherInfo(data));
	}, [search]);

	return (
		<div>
			<header>
				<Search setSearch={setSearch} />
			</header>
			<main>
				<WeatherCard weatherInfo={weatherInfo} />
			</main>
		</div>
	);
}

export default App;
