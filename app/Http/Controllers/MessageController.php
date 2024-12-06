<?php

namespace App\Http\Controllers;

use App\Http\Actions\EncryptMessage;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Str;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index($messageIdent)
    {
        $message = Message::where('ident', $messageIdent)->first();

        return $message;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'content' => 'required',
            'ttl' => 'required|integer',
        ]);
        $content = $validated['content'];
        $ttl = (int)$validated['ttl'];

        $message = new Message();
        $message->ident = Str::uuid()->toString();
        $message->content = EncryptMessage::handle($content);
        $message->ttl = $ttl;
        $message->save();

        $url = URL::temporarySignedRoute('message.view', now()->addMinutes($ttl), ['messageIdent' => $message->ident]);
        dd($url);

        return redirect()->back()->with(['success' => 'Message sent successfully', 'url' => $url]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Message $message)
    {
        //
    }
}
