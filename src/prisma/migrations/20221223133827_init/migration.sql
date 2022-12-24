/*
  Warnings:

  - You are about to drop the column `Phone` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `User_Email_Phone_idx` ON `user`;

-- DropIndex
DROP INDEX `User_Phone_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `Phone`;
