<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8" />
    <title>Orders Management Application</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- MDB CSS -->
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.css"
      rel="stylesheet"
    />

    <!-- Boxicons CDN Link -->
    <link
      href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
      rel="stylesheet"
    />

    <link href="{{asset('clerkPage.css')}}" rel="stylesheet" />
  </head>

  <body>
    <div class="sidebar">
      <div class="logo-details">
        <i class="bx bx-dish icon"></i>
        <div class="logo_name">Orders MCT</div>
        <i class="bx bx-menu" id="btn"></i>
      </div>
      <ul class="nav-list">
        <li>
          <i class="bx bx-search"></i>
          <input type="text" placeholder="Search..." />
          <span class="tooltip">Search</span>
        </li>
        <li>
          <a href="{{url('orderlist')}}">
            <i class="bx bx-book"></i>
            <span class="links_name">All Orders</span>
          </a>
          <span class="tooltip">All Orders</span>
        </li>
        <li>
          <a href="{{url('processing')}}">
            <i class="bx bx-food-menu"></i>
            <span class="links_name">Processing Orders</span>
          </a>
          <span class="tooltip">Processing Orders</span>
        </li>
        <li class="profile">
          <div class="profile-details">
            <img src="{{asset('Background.jpg')}}" alt="profileImg" />
            <div class="name_job">
              <div class="name">M.Clown Troupe</div>
              <div class="job">Clerk</div>
            </div>
          </div>
          <i class="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
    <section class="home-section">
            
        <x-app-layout>
        <x-slot name="header">
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                <div class="TableWrapper">
                <div class="TableHeader">
                  <h1>@yield('type')</h1>
                  <form action="" method="POST">
                    <div class="input-group" style="width: auto">
                      <div class="form-outline">
                        <input
                          type="search"
                          id="form1"
                          class="form-control form-control-lg"
                          name="search"
                        />
                        <label class="form-label" for="form1">Search</label>
                      </div>
                      <button
                        name="submit-search"
                        type="submit"
                        class="btn btn-primary"
                      >
                        <i class="bx bx-search bx-sm"></i>
                      </button>
                    </div>
                  </form>
                </div>
                <!-- Render Table Here -->
                <table class="table table-light table-striped">
                  <thead class="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Order's Id</th>
                      <th scope="col">Dishes</th>
                      <th scope="col">Table number</th>
                      <th scope="col">Order's status</th>
                      <th scope="col">Order's date</th>
                    </tr>
                  </thead>
                  <tbody>
                      @foreach($orders as $key => $order)
                        <tr>
                            <td scope="row">{{$key + 1}}</td>
                            <td scope="row">{{$order->orderId}}</td>
                            <td scope="row">
                                {{$order->Dishes}}
                            </td>
                            <td scope="row">{{$order->tableNumber}}</td>
                            <td scope="row">{{$order->orderStatus == 0 ? 'On processing' : 'Finished'}}</td>
                            {{-- {{ $disabled ? 'disabled' : ''}} --}}
                            <td scope="row">11-18-2021</td>
                        </tr>
                      @endforeach
                  </tbody>
                </table>
              </div>
            </h2>
        </x-slot>

        
            

        </x-app-layout>


     
    </section>

    <script src="{{asset('clerkPage.js')}}"></script>
    <script
      type="text/javascript"
      src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/3.6.0/mdb.min.js"
    ></script>
  </body>
</html>
