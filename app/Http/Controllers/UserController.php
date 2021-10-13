<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{   
    public function welcomeuser()
    {
        return view('welcomeuser');
    }

    public function user_register()
    {
        return view('userreg');
    }
    public function userlogin()
    {
        return view('userlogin');
    }
}
