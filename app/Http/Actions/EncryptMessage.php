<?php

namespace App\Http\Actions;

use Illuminate\Support\Facades\Hash;

class EncryptMessage
{
    public static function handle($message): string
    {
        return Hash::make($message);
    }
}
