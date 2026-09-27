import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const stayInquiries = sqliteTable("stay_inquiries", {
  id: text("id").primaryKey(),
  arrival: text("arrival").notNull(),
  departure: text("departure").notNull(),
  guests: integer("guests").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull().default(""),
  message: text("message").notNull().default(""),
  status: text("status").notNull().default("new"),
  createdAt: integer("created_at").notNull(),
});
