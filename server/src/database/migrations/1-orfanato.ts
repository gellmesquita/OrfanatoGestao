import { Knex } from "knex";
export async function up(knex: Knex) {
    return knex.schema.createTable('orfanato', (table)=>{
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('username').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('about').notNullable();
        table.string('instructions').notNullable();
        table.string('senha').notNullable();
        table.string('adm').notNullable();
        table.string('data').notNullable();
        table.string('image').notNullable();
        table.string('hora_aberta').notNullable();
        table.boolean('open_on_weekends').defaultTo(false).notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('orfanato')
}

//name, username, latitude, longitude, about, instructions, senha, open_on_weekends, adm, data, email