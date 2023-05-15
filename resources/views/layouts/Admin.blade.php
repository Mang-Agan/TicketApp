<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link rel="stylesheet" href="{{asset('theme/adminLte/plugins/fontawesome-free/css/all.min.css')}}">

    <link rel="stylesheet" href="{{asset('theme/adminLte/dist/css/adminlte.min.css')}}">


</head>

<body>


    <div class="container-fluid">
        @yield('content')
    </div>


    @yield('scripts')
    <script src="{{asset('theme/adminLte/plugins/jquery/jquery.min.js')}}"></script>

    <script src="{{asset('theme/adminLte/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <script src="{{asset('theme/adminLte/dist/js/adminlte.min.js')}}"></script>
</body>

</html>