CREATE TABLE blogs (
    id SERIAL  PRIMARY KEY,
    author text,
    url text NOT NULL,
    title text NOT NULL,
    likes INT DEFAULT 0
);

INSERT INTO blogs (author, url, title, likes) VALUES ('Dan Abramov', 'https://react.dev/', 'Looking into the new react docs', 869);
INSERT INTO blogs (author, url, title, likes) VALUES ('Addi Osmani', 'https://patterns.dev/posts/classic-design-patterns/', 'Classic Design Patterns', 245);