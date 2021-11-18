<?php

use App\Http\Controllers\OrderDishesController;
use App\Models\OrderDishes;
use Illuminate\Support\Facades\Route;

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
    return view('home');
});

Route::get('/dishes/{id}', function ($id) {
    //dd($id);
    return view('menu.index', ['id' => $id]);  
});

Route::get('/dishes', function () {
    
    return view('menu.index');
    
});

Route::post('/payment/{id}', function ($id) {
    return view('menu.submit', ['id' => $id]);
});

 
Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::resource('order_dishes', OrderDishes::class);


Route::post('my_order/store', [OrderDishesController::class, 'store']);


Route::get('/orderlist', [OrderDishesController::class, 'show'])->middleware(['auth:sanctum', 'verified']);

Route::get('/processing', [OrderDishesController::class, 'showProcessing'])->middleware(['auth:sanctum', 'verified']);