CREATE DATABASE EDMS;
GO
CREATE LOGIN edms_admin WITH PASSWORD = 'edms_admin';
GO
USE EDMS;
GO
CREATE USER edms_admin FOR LOGIN edms_admin;
GO
ALTER ROLE db_ddladmin ADD MEMBER edms_admin;
ALTER ROLE db_datareader ADD MEMBER edms_admin;
ALTER ROLE db_datawriter ADD MEMBER edms_admin;
GO
