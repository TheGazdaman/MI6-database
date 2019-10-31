<?php

namespace App\Http\Controllers;

use App\Person;
use Illuminate\Http\Request;

class PersonController extends Controller
{
    public function index() {
        $people = Person::orderBy('name', 'ASC')->limit(20)->get();
        return $people;
    }
}
