## TASK 2-1

Zadeklaruj stala CITY_SPEED_LIMIT i przypisz jej wartosc 50, zadeklaruj stala TWO_LANE_EXPRESSWAY_SPEED_LIMIT i przypisz jej wartosc 120, zadeklaruj stala HIGHWAY_SPEED_LIMIT i przypisz jej wartosc 140.

Utworz zmienna speed, w ktorej bedzie mozna zmieniac wartosc. Niech wartosc poczatkowow tej zmiennej wynosi 49.
Utworz zmienna typeOfRoad, w ktorej bedzie mozna zmieniac wartosc. Niech wartosc poczatkowa tej zmiennej wynosi 'city'.

Napisz instrukcje warunkowa (if, switch lub jedna i druga), ktoryj jezeli zostana spelnione warunki:

typeOfRoad ma wartosc 'city' i speed jest mniejsze od wartosci CITY_SPEED_LIMIT to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci CITY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Miasto: przekroczyles prędkość'.

typeOfRoad ma wartosc 'expressway' i speed jest mniejsze od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT to zostanie wyswietlony tekst 'Eska: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci TWO_LANE_EXPRESSWAY_SPEED_LIMIT - wyswietlony zostanie tekst: 'Eska: przekroczyles prędkość'.

typeOfRoad ma wartosc 'highway' i speed jest mniejsze od wartosci HIGHWAY_SPEED_LIMIT to zostanie wyswietlony tekst 'Autostrada: jedziesz prawidlowo' jezeli ta predkosc jest wieksza od wartosci HIGHWAY_SPEED_LIMIT - wyswietlony zostanie tekst: 'autostrada: przekroczyles prędkość'.

## TASK 2-3

zadanie dodatkowe dla chetnych, ale zachecam zeby kazdy z Was sprobowal

Zmien tak wytyczne zadania [2][1], zeby napisac funkcje, ktora bedzie przyjmowala dwa parametry: speed i typeOfRoad gdzie wartosc domyslna typeOfRoad jest rowna 'city' funkcja powinna wypisywac to co jest zapisane w zadaniu [2][1] kiedy przy wywolaniu podajemy speed i/lub typeOfRoad:

czyli jezeli wywolam funkcje
myFunction(30); to zostanie wyswietlony tekst 'Miasto: jedziesz prawidlowo'
myFunction(150, 'expressway'); zostanie wyswietlony tekst 'Eska: przekroczyles prędkość'

itd.