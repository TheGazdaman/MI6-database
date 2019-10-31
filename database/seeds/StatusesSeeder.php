<?php

use App\Status;
use Illuminate\Database\Seeder;

class StatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Status::insert(
            [
                ['name' => 'Active'], 
                ['name' => 'Arrested'], 
                ['name' => 'Deceased'],
                ['name' => 'In Custody'],
                ['name' => 'Incarcerated'],
                ['name' => 'Retired'],
                ['name' => 'Unknown']
            ]
        );
    }
}
