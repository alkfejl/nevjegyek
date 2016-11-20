'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.on('/').render('main');

Route.get('/main', 'NevjegyController.list');
Route.get('/list', 'NevjegyController.list');
Route.get('/create', 'NevjegyController.create');
Route.post('/create', 'NevjegyController.submitCreate');

Route.get('/login', 'UserController.login');
Route.post('/login', 'UserController.loginSubmit');
Route.get('/signup', 'UserController.signup');
Route.post('/signup', 'UserController.store');
Route.get('/logout', 'UserController.submitLogout');
