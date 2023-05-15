<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Participans extends Model
{
    protected $keyType = "string";
    public $incrementing = false;
    use HasFactory;
}
