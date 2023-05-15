<?php

function responseFormat($code, $message = null, $params = null)
{
    $code = (int) $code;
    if ($code < 100) $code = 500;
    if ($message == null) $message = 'Undefined message';
    return response()->json(['message' => $message, 'params' => $params], $code);
}
