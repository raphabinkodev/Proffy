
import Knex from 'knex';

export async function up (knex: Knex) {
    return knex.schema.createTable('classes', table => {
        table.increments('id').primary();
        table.string('subject').notNullable();
        table.decimal('cost').notNullable();
        //Interação com o user, ou seja, a tabela de aulas, vai estar relacionada a um usuário.
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE') //Deleta todos os elementos da tabela, caso o "professor" seja deletado.
            .onDelete('CASCADE');
    })
}

export async function down (knex: Knex) {
    return knex.schema.dropTable('classes');
}