<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use App\Repository\ParticipansRepository;

class ParticipansController extends Controller
{

    protected $repository;

    public function __construct()
    {
        $this->repository = new ParticipansRepository();
    }

    public function createParticipans(Request $request)
    {
        try {
            $code = 500;
            $message = "Failed";
            $params = null;

            $params = $this->repository->create($request);
            $code = 200;
            $message = "Success";

            return responseFormat($code, $message, $params);
        } catch (Exception $e) {
            return responseFormat($e->getCode(), $e->getMessage(), null);
        }
    }
}
