const CITY_SPEED_LIMIT = 50;
const TWO_LANE_EXPRESSWAY_SPEED_LIMIT = 120;
const HIGHWAY_SPEED_LIMIT = 140;

let speed = 49;
let typeOfRoad = 'city';

function myFunction(speed, road) {

	let way = 'Miasto:';
	const goodSpeed = ' jedziesz prawidłowo';
	const badSpeed = ' przekroczyłeś prędkość';

	if (road === 'city' || road === undefined) {
		way = 'Miasto:';
		if (speed <= CITY_SPEED_LIMIT) {
			console.log(way + goodSpeed);
		} else if (speed > CITY_SPEED_LIMIT) {
			console.log(way + badSpeed);
		}
	} else if (road === 'expressway') {
		way = 'Eska:';
		if (speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
			console.log(way + goodSpeed);
		} else if (speed > TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
			console.log(way + badSpeed);
		}
	} else if (road === 'highway') {
		way = 'Autostrada:';
		if (speed <= TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
			console.log(way + goodSpeed);
		} else if (speed > TWO_LANE_EXPRESSWAY_SPEED_LIMIT) {
			console.log(way + badSpeed);
		}
	};
}

myFunction(30);