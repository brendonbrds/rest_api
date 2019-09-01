CREATE database db_posts DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;

CREATE TABLE posts (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  body text COLLATE utf8mb4_unicode_ci NOT NULL,
  author varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  created_at datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO posts (id, title, body, author, created_at) VALUES
(1, 'MovieONweb', 'app movies in web', 'Movies Company', '2019-08-30 18:07:55'),
(2, 'Beauty', 'app beauty', 'Brendon R Silva', '2019-08-30 18:08:40');
