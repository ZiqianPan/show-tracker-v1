DROP TABLE IF EXISTS shows;

CREATE TABLE shows (
    id SERIAL PRIMARY KEY, 
    name varchar(255), 
    alternativeNames varchar(255),
    url varchar(255),
    season varchar(255),
    episode varchar(255),
    volume varchar(255), 
    description varchar(255), 
    timeStamp varchar(255),
    updateWeekday varchar(255)
);
