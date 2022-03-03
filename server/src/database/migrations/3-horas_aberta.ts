import { Knex } from "knex";
export async function up(knex: Knex) {
    return knex.schema.createTable('horas_aberta', (table)=>{
        table.increments('id').primary();
        table.string('opening_hours').notNullable();
        table.integer('idOrfanato').notNullable().references('id').inTable('orfanato') 
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('horas_aberta')
}

