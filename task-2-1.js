const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';

function myFunction(speed, road) {

	let way = 'Miasto:';
	const goodSpeed = ' jedziesz prawidłowo.';
	const badSpeed = ' przekroczyłeś prędkość!';

	if (road === 'city' || road === undefined) {
		way = 'Miasto:';
		console.log(speed <= CITY_SPEED_LIMIT ? way + goodSpeed : way + badSpeed);

	} else if (road === 'expressway') {
		way = 'Eska:';
		console.log(speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT ? way + goodSpeed : way + badSpeed);

	} else if (road === 'highway') {
		way = 'Autostrada:';
		console.log(speed <= HIGHWAY_SPEED_LIMIT ? way + goodSpeed : way + badSpeed);
	};
};

myFunction(30);