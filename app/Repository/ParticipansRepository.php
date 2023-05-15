<?php

namespace App\Repository;

use App\Models\Participans;
use Exception;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class ParticipansRepository
{

    public function create(Request $request)
    {
        try {
            $participans = new Participans();
            $participans->id = Uuid::uuid4()->toString();
            $participans->name = $request->name;
            $participans->email = $request->email;
            $participans->phone = $request->phone;
            $participans->ticket = Str::random(5);
            $participans->saveOrFail();
            return $participans;
        } catch (Exception $e) {
            throw new Exception($e->getMessage());
        }
    }
}
