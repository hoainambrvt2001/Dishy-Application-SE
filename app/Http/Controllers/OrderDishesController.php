<?php

namespace App\Http\Controllers;

use App\Models\OrderDishes;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class OrderDishesController extends Controller
{

    public function random_orders_id()
    {
        $chars = "OD-";
        $numbers = "0123456789";
        $orderId = $chars . substr(str_shuffle($numbers), 0, 10);
        return $orderId;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //Store what we have done
        // dd($request);
        //dd($request->all());
        //dd($request->all());
        
        $orderId = $this->random_orders_id();



        for($i = 0; $i < $request->length; $i++){
            //echo $request->all()["name_".$i] . "-" . $request->all()["quantity_".$i]  . "<br>";

            DB::insert('insert into order_dishes (orderId, dishName, dishQuantity, tableNumber, orderStatus) values 
            (?, ?, ?, ?, ?)', [$orderId, $request->all()["name_".$i], $request->all()["quantity_".$i], $request->tableNumber, false]);
            //DB::insert('insert into users (id, name) values (?, ?)', [1, 'Dayle']);
        }
        
        return redirect('/');
        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\OrderDishes  $orderDishes
     * @return \Illuminate\Http\Response
     */
    public function show(OrderDishes $orderDishes)
    {
        //
        $orders = DB::select('Call displayAllOrders()');
        
        //dd($orders);
        return view('clerk.order')->with('orders', $orders);
        //return view('Order', $order);
    }

    public function showProcessing(OrderDishes $orderDishes)
    {
        //
        $orders = DB::select('Call displayProcessingOrders()');
        
        //dd($orders);
        return view('clerk.processing')->with('orders', $orders);
        //return view('Order', $order);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\OrderDishes  $orderDishes
     * @return \Illuminate\Http\Response
     */
    public function edit(OrderDishes $orderDishes)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\OrderDishes  $orderDishes
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, OrderDishes $orderDishes)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\OrderDishes  $orderDishes
     * @return \Illuminate\Http\Response
     */
    public function destroy(OrderDishes $orderDishes)
    {
        //
    }
}
