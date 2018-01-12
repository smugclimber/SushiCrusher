### Schema

DROP DATABASE IF EXISTS t3dycgsuff9cb8m4;
CREATE DATABASE t3dycgsuff9cb8m4;
CREATE TABLE sushi
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	fresh BOOLEAN DEFAULT false,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO sushi (name, fresh) VALUES ('Tuna', true);
INSERT INTO sushi (name, fresh) VALUES ('Albacore', true);
INSERT INTO sushi (name, fresh) VALUES ('Maui Maui', true);
INSERT INTO sushi (name, fresh) VALUES ('Octopus', true);
INSERT INTO sushi (name, fresh) VALUES ('Salmon', true);
INSERT INTO sushi (name, fresh) VALUES ('Crab', true);

SELECT * FROM sushi;
