# Dokumentáció

## Névjegyek

Készítette: Árvay Balázs

### 1. Követelményanalízis

#### 1.1 Célkitűzés, projektindító dokumentum

A program legfőbb célja névjegyek közzététele az interneten. Az adatok védelme érdekében legyen lehetőség regisztrációra és bejelentkezésre. Bejelentkezett felhasználó megtekintheti a már feltöltött névjegyeket, illetve szerkesztheti a saját maga által feltöltött névjegyeket.

##### Funkcionális követelmények:

* Vendégként:
		* Főoldalon egy rövid tájékoztató az oldalról.
		* Regisztráció lehetősége.
* Felhasználóként:
		* Bejelentkezési lehetőség az oldalra.
		* Saját névjegyek adatainak szerkesztése.
		* Keresési lehetőség névjegyekre név, cím, telefonszám, email-cím alapján.
		* Böngészés a névjegyek között.
		
##### Nem funkcionális követelmények:
	* Felhazsnálóbarát, ergonomikus elrendezés különböző eszközökön is, kijelzőmérettől függetlenül.
	* Gyors és biztonságos működés.
	* Jelszavak biztonságos tárolása.
	* Felhasználótípusnak megfelelő hozzáférési kör.

#### 1.2 Használatieset-modell, funkcionális követelmények

**Vendég:** Csak a publikus oldalakat éri el

* Főoldal
* Bejelentkezés
* Regisztráció

**Bejelentkezett felhasználó:** Publikus oldalak elérésén felül egyéb funkciókhoz is hozzáfér

* Új névjegy felvitele
* Meglévő névjegyek megtekintése
* Meglévő névjegyek szerkesztése
* Meglévő névjegyek törlése

![Használati eset diagram](docs/images/usecase.png)

Vegyünk példának egy egyszerű folyamatot:

**Meglévő névjegy törlése:**

* A felhasználó az oldalra érkezve bejelentkezik vagy regisztrál.
* Ezután megtekintheti a saját névjegyeit.
* Kiválasztja a törölni kívánt névjegyet.
* A törlés opciót választja.
* Visszatérés a főoldalra.
