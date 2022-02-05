import React from 'react';
import './weatherCard.css';
import nightImage from '../../assets/night.webp';
import dayImage from '../../assets/day.jpg';

function WeatherCard({weatherInfo}) {
	console.log(weatherInfo);

	const sunsetTime = new Date(parseInt(weatherInfo?.sys?.sunset) * 1000);
	const sunsetTimeFormatted = `${sunsetTime.getHours()}h${sunsetTime.getMinutes()}`;
	const actualTime = new Date();
	const sunriseTime = new Date(parseInt(weatherInfo?.sys?.sunrise) * 1000);

	const isNight = actualTime < sunsetTime && actualTime < sunriseTime;
	const timeBg = isNight ? nightImage : dayImage;

	const weatherType = () => {
		if (!isNight) {
			switch (weatherInfo?.weather[0]?.main) {
				case 'Clouds':
					return 'wi-day-cloudy';
				case 'Haze':
					return 'wi-day-fog';
				case 'Clear':
					return 'wi-day-sunny';
				case 'Mist':
					return 'wi-day-showers';
				case 'Snow':
					return 'wi-day-snow';
				case 'Rain':
					return 'wi-day-rain';

				default:
					return '';
			}
		} else {
			switch (weatherInfo?.weather[0]?.main) {
				case 'Clouds':
					return 'wi-night-alt-cloudy';
				case 'Haze':
					return 'wi-night-fog';
				case 'Clear':
					return 'wi-night-clear';
				case 'Mist':
					return 'wi-day-showers';
				case 'Snow':
					return 'wi-night-snow';
				case 'Rain':
					return 'wi-night-rain';

				default:
					return '';
			}
		}
	};

	return (
		<section>
			<article className="widget">
				<div
					className="weatherIcon"
					style={{backgroundImage: `url(${timeBg})`}}
				>
					<i className={`wi ${weatherType()}`}></i>
				</div>
				<div className="weatherInfo">
					<div className="temperature">
						<span>{weatherInfo?.main?.temp}&deg;</span>
					</div>
					<div className="description">
						<div className="weatherCondition">
							{weatherInfo?.weather[0]?.description}
						</div>
						<div className="place">
							{weatherInfo?.name}, {weatherInfo?.sys?.country}
						</div>
					</div>
				</div>
				<div className="date">{new Date().toLocaleString()}</div>
				<div className="extra-temp">
					<div className="temp-info-minmax">
						<div className="two-sided-section">
							<p>
								<i className={'wi wi-sunset'}></i>
							</p>
							<p className="extra-info-leftside">{sunsetTimeFormatted}</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={'wi wi-humidity'}></i>
							</p>
							<p className="extra-info-leftside">
								{weatherInfo?.main?.humidity} %
							</p>
						</div>
					</div>
					<div className="weather-extra-info">
						<div className="two-sided-section">
							<p>
								<i className={'wi wi-rain'}></i>
							</p>
							<p className="extra-info-leftside">
								{weatherInfo?.main?.pressure} hPa
							</p>
						</div>
						<div className="two-sided-section">
							<p>
								<i className={'wi wi-strong-wind'}></i>
							</p>
							<p className="extra-info-leftside">
								{weatherInfo?.wind?.speed} km/h
							</p>
						</div>
					</div>
				</div>
			</article>
		</section>
	);
}

export default WeatherCard;
