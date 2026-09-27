CREATE TABLE `stay_inquiries` (
	`id` text PRIMARY KEY NOT NULL,
	`arrival` text NOT NULL,
	`departure` text NOT NULL,
	`guests` integer NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`phone` text DEFAULT '' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`status` text DEFAULT 'new' NOT NULL,
	`created_at` integer NOT NULL
);
