<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ConserController;
use App\Http\Controllers\ParticipansController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('Home.Home');
});

Route::get('/admin', function () {
    return view('Admin.Dashboard');
});

Route::get('/manage-conser', function () {
    return view('Admin.ManageConser');
});

Route::post('/create-conser', [ConserController::class, 'createConser']);
Route::get('/table-conser', [ConserController::class, 'tableConser']);
Route::post('/delete-conser', [ConserController::class, 'deleteConser']);
Route::post('/update-conser', [ConserController::class, 'updateConser']);


Route::post('/create-participans', [ParticipansController::class, 'createParticipans']);
