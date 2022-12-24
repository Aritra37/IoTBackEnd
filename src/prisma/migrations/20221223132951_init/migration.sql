/*
  Warnings:

  - The values [MALE,FEMALE] on the enum `User_Gender` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `Gender` ENUM('Male', 'Female') NOT NULL;
