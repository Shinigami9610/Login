<?php

namespace App\Http\Controllers\Api;

use App\Models\Contenido;
use Illuminate\Http\Request;
use App\Http\Requests\ContenidoRequest;
use Illuminate\Http\Response;
use App\Http\Controllers\Controller;
use App\Http\Resources\ContenidoResource;

class ContenidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $contenidos = Contenido::paginate();

        return ContenidoResource::collection($contenidos);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContenidoRequest $request): Contenido
    {
        return Contenido::create($request->validated());
    }

    /**
     * Display the specified resource.
     */
    public function show(Contenido $contenido): Contenido
    {
        return $contenido;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ContenidoRequest $request, Contenido $contenido): Contenido
    {
        $contenido->update($request->validated());

        return $contenido;
    }

    public function destroy(Contenido $contenido): Response
    {
        $contenido->delete();

        return response()->noContent();
    }
}
