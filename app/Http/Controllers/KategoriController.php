<?php

namespace App\Http\Controllers;

use App\Models\Kategori;
use Illuminate\Http\Request;
use Inertia\Inertia;

class KategoriController extends Controller
{
    public function index()
    {
        return Inertia::render('Kategori/Semua',[
            'data_kategori' => Kategori::orderBy('nama')->get(),
        ]);

    }

    public function create()
    {
        return Inertia::render('Kategori/Tambah');
    }

    public function store(Request $request)
    {
        $data = \Validator::make($request->all(), [
            'nama' => 'required|unique:kategoris',
            'icon' => 'image|required|max:512',
            'jenis' => 'required',
        ]);

        if ($data->fails()) {
            return redirect()->route('kategori.tambah')
                ->withErrors($data)
                ->withInput();
        }

        $path = $this->uploadIcon($request->icon);

        Kategori::create([
            'nama' => $request->nama,
            'icon' => $path,
            'jenis' => $request->jenis
        ]);

    }

    public function uploadIcon($icon)
    {
        $nama_file = \Str::slug($icon->getClientOriginalName());
        $extension = $icon->extension();
        $nama_file = "{$nama_file}.{$extension}";

        $path = $icon->storeAs('icons', $nama_file);

        return $path;
    }
}
