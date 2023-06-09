<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>AdminLTE 3 | Starter</title>


    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">

    <link rel="stylesheet" href="{{asset('theme/adminLte/plugins/fontawesome-free/css/all.min.css')}}">

    <link rel="stylesheet" href="{{asset('theme/adminLte/dist/css/adminlte.min.css')}}">

</head>

<body class="hold-transition sidebar-mini fixed">

    <div class="container-fluid">
        @yield('content')
    </div>


    @yield('scripts')
    <script src="{{asset('theme/adminLte/plugins/jquery/jquery.min.js')}}"></script>

    <script src="{{asset('theme/adminLte/plugins/bootstrap/js/bootstrap.bundle.min.js')}}"></script>

    <script src="{{asset('theme/adminLte/dist/js/adminlte.min.js')}}"></script>
</body>

</html>