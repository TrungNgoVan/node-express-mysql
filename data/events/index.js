'use strict';

const mysql = require('mysql2/promise');
const { loadSqlQueries } = require('../utils');
const config = require('../../config');

class EventData {
    async getEvents() {
        try {
            // create a connection to the MySQL database
            const connection = await mysql.createConnection(config.mysql);
            // load the SQL queries
            const sqlQueries = await loadSqlQueries('events');
            // execute the SQL query to get all events
            const [rows, fields] = await connection.execute(sqlQueries.eventsList);
            // return the results
            return rows;
        } catch (error) {
            console.log(error.message);
        }
    }

    async getEventById(id) {
        try {
            // create a connection to the MySQL database
            const connection = await mysql.createConnection(config.mysql);
            // load the SQL queries
            const sqlQueries = await loadSqlQueries('events');
            // execute the SQL query to get a single event
            const [rows, fields] = await connection.execute(sqlQueries.eventById, [id]);
            // check if the event exists in the database and return the results if it does exist or null if it does not exist 
            if (rows.length > 0) {
                return rows[0]; 
            } else {
                return null;
            }
            // return the results
        } catch (error) {
            console.log(error.message);
        }
    }

    async createEvent(event) {
        try {
            // create a connection to the MySQL database
            const connection = await mysql.createConnection(config.mysql);
            // load the SQL queries
            const sqlQueries = await loadSqlQueries('events');
            // execute the SQL query to create a new event
            const [result] = await connection.execute(sqlQueries.createEvent, [event.eventTitle, event.eventDescription, event.startDate, event.endDate, event.avenue, event.maxMembers]);
            // get the ID of the newly inserted row
            const insertedId = result.insertId;
            // return the ID of the inserted row
            return insertedId;
        } catch (error) {
            console.log(error.message);
        }
    }
}

module.exports = new EventData();
