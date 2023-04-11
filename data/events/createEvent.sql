-- query create event in mysql
-- events table is created in mysql
-- events: eventId, eventTitle, eventDescription, startDate, endDate, avenue, maxMembers

INSERT INTO events (eventTitle, eventDescription, startDate, endDate, avenue, maxMembers)
VALUES (?, ?, ?, ?, ?, ?);
