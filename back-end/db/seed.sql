-- Population seed

\c songs_dev

INSERT INTO songs (name, url, category, description, is_favorite)
VALUES 
('All Star', 'www.google.com', 'Rock', 'Smashmouth', true),
('Space Jam', 'www.youtube.com', 'Space', 'Jam', false),
('Bad Guy', 'www.billieeilish.org', 'Sad', 'For people.', true);