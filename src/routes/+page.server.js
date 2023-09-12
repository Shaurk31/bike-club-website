import { SHEETS_API_KEY } from '$env/static/private';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const resp = await (await fetch(`https://sheets.googleapis.com/v4/spreadsheets/1ocfguc39RjaBq3IYhl76e3_v8_nsXwQpWvMOa--1hZE/values/stats?key=${SHEETS_API_KEY}`)).json();

	const rows = resp.values;

	const total_rides = rows[1][5];
	const total_miles = rows[1][6];
	const total_people = rows[1][7];

	return {
		total_rides,
		total_miles,
		total_people,
	};
}
