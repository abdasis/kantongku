<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class KategoriTest extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function test_mengakses_halaman()
    {
        $this->get('kategori');

    }
}
