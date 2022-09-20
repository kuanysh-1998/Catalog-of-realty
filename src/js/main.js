import homePage from './pages/homePage';
import singleItem from './pages/singleItemPage';
import favouritesPage from './pages/favouritesPage';
import bidsPage from './pages/bidsPage';
import errorPage from './pages/errorPage';

const state = {};
window.state = state;
// Routes
const routes = [
	{ path: '/', component: homePage },
	{ path: 'item', component: singleItem },
	{ path: 'favourites', component: favouritesPage },
	{ path: 'bids', component: bidsPage },
    { path: 'error', component: errorPage },
];

function findComponentByPath(path, routes) {
	return routes.find(function (route) {
		return route.path === path;
	});
}

// Router
function router() {

	const pathArray = location.hash.split('/');

	let currentPath = pathArray[0] === '' ? '/' : pathArray[1];
	currentPath = currentPath === '' ? '/' : currentPath;

	const { component = errorPage } = findComponentByPath(currentPath, routes) || {};
	component(state);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);