@extends('layouts.Admin')

@section('content')
<style>
    .react-datetime-picker {
        border: none;
    }

    .react-datetime-picker__inputGroup {
        border: none;
    }

    .react-datetime-picker__inputGroup__input {
        border: none;
    }

    .react-datetime-picker__button {
        border: none;
    }
</style>
<div id="content">

</div>
@endSection

@section('scripts')
<script src="{{asset('js/admin/ManageConser.js')}}"></script>
@endSection