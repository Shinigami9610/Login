<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Contenido
 *
 * @property $id
 * @property $name
 * @property $etiquetas
 * @property $lugares
 * @property $descripcion
 * @property $servicio
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Contenido extends Model
{
    
    protected $perPage = 20;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['name', 'etiquetas', 'lugares', 'descripcion', 'servicio'];


}
