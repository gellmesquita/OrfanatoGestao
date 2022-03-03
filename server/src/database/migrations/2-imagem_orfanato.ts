import { Knex } from "knex";
export async function up(knex: Knex) {
    return knex.schema.createTable('imagem_orfanato', (table)=>{
        table.increments('id').primary();
        table.string('path').notNullable();
        table.integer('idOrfanato').notNullable().references('id').inTable('orfanato') 
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('imagem_orfanato')
}

