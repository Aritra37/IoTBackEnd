/*
  Warnings:

  - You are about to drop the column `Batch_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `Payment_id` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `batch` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_Batch_id_fkey`;

-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_Payment_id_fkey`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `Batch_id`,
    DROP COLUMN `Payment_id`;

-- DropTable
DROP TABLE `batch`;

-- DropTable
DROP TABLE `payment`;
