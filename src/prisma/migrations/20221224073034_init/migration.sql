/*
  Warnings:

  - You are about to drop the column `Payment_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_Payment_id_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `Payment_id`,
    MODIFY `Batch_id` INTEGER NOT NULL DEFAULT 1;

-- DropTable
DROP TABLE `payment`;
