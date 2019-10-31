<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeopleTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('people', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('image_id')->nullable();
            $table->bigInteger('status_id')->nullable();
            $table->string('name')->nullable();
            $table->string('title')->nullable();
            $table->integer('age')->nullable();
            $table->string('year_of_birth')->nullable();
            $table->string('year_of_death')->nullable();
            $table->string('special_features')->nullable();
            $table->string('hair_color')->nullable();
            $table->string('eye_color')->nullable();
            $table->string('height')->nullable();
            $table->string('weight')->nullable();
            $table->string('nationality')->nullable();
            $table->string('occupation')->nullable();
            $table->text('status_text')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('people');
    }
}
