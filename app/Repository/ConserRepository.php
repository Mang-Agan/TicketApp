<?php

namespace App\Repository;

use Illuminate\Http\Request;
use App\Models\Conser;
use Carbon\Carbon;
use Exception;
use Ramsey\Uuid\Uuid;

class ConserRepository
{
    public function create(Request $request)
    {
        try {
            $conser = new Conser();
            $conser->id = Uuid::uuid4()->toString();
            $conser->name = $request->name;
            $conser->kuota = $request->kuota;
            $conser->tgl_mulai = Carbon::parse($request->tgl_mulai);
            $conser->tgl_selsai = Carbon::parse($request->tgl_selsai);

            $conser->created_at = Carbon::now();
            $conser->updated_at = Carbon::now();

            $conser->saveOrFail();
            return $this->table(new Request());
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function table(Request $request)
    {
        try {
            $response = collect([]);
            $consers = Conser::get();

            foreach ($consers as $conser) {
                $response->push([
                    'value' => $conser->id,
                    'label' => $conser->name,
                    'meta' => [
                        'kuota' => $conser->kuota,
                        'tgl_mulai' => $conser->tgl_mulai,
                        'tgl_selsai' => $conser->tgl_selsai,
                    ]
                ]);
            }

            return $response;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function update(Request $request)
    {
        try {
            $conser = Conser::where('id', $request->id)->first();
            $conser->name = $request->name;
            $conser->kuota = $request->kuota;
            $conser->tgl_mulai = Carbon::parse($request->tgl_mulai);
            $conser->tgl_selsai = Carbon::parse($request->tgl_selsai);
            $conser->updated_at = Carbon::now();

            $conser->saveOrFail();
            return $this->table(new Request());
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }

    public function delete(Request $request)
    {
        try {
            Conser::where('id', $request->id)->delete();
            return $this->table(new Request());
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
