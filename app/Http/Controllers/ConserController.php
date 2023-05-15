<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Repository\ConserRepository;
use App\Validation\ConserValidation;
use Exception;

class ConserController extends Controller
{

    protected $repository;
    protected $validation;

    public function __construct()
    {
        $this->repository = new ConserRepository();
        $this->validation = new ConserValidation();
    }

    public function createConser(Request $request)
    {
        try {
            $code = 500;
            $message = 'failed';
            $params = null;

            $params = $this->repository->create($request);
            $code = 200;
            $message = "success";

            return responseFormat($code, $message, $params);
        } catch (Exception $e) {
            return responseFormat($e->getCode(), $e->getMessage(), null);
        }
    }

    public function tableConser(Request $request)
    {
        try {
            $code = 500;
            $message = 'failed';
            $params = null;

            $params = $this->repository->table($request);
            $code = 200;
            $message = "success";

            return responseFormat($code, $message, $params);
        } catch (Exception $e) {
            return responseFormat($e->getCode(), $e->getMessage(), null);
        }
    }

    public function deleteConser(Request $request)
    {
        try {
            $code = 500;
            $message = 'failed';
            $params = null;

            $params = $this->repository->delete($request);
            $code = 200;
            $message = "success";

            return responseFormat($code, $message, $params);
        } catch (Exception $e) {
            return responseFormat($e->getCode(), $e->getMessage(), null);
        }
    }

    public function updateConser(Request $request)
    {

        try {
            $code = 500;
            $message = 'failed';
            $params = null;

            $params = $this->repository->update($request);
            $code = 200;
            $message = "success";

            return responseFormat($code, $message, $params);
        } catch (Exception $e) {
            return responseFormat($e->getCode(), $e->getMessage(), null);
        }
    }
}
