/*
  Warnings:

  - Added the required column `value` to the `Payment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `payment` ADD COLUMN `value` INTEGER NOT NULL;
