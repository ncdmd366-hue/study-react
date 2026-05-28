-- Step1: EDMSデータベース作成（既存でもエラーにならない）
IF NOT EXISTS (SELECT name FROM sys.databases WHERE name = 'EDMS')
    CREATE DATABASE EDMS;
GO

-- Step2: ログイン作成（パスワード強化）
USE master;
GO
CREATE LOGIN edms_admin WITH PASSWORD = 'P@ssw0rd_Edms123',
    CHECK_POLICY = OFF,
    CHECK_EXPIRATION = OFF;
GO

-- Step3: DBユーザー作成と権限付与
USE EDMS;
GO
CREATE USER edms_admin FOR LOGIN edms_admin;
GO
ALTER ROLE db_ddladmin ADD MEMBER edms_admin;
ALTER ROLE db_datareader ADD MEMBER edms_admin;
ALTER ROLE db_datawriter ADD MEMBER edms_admin;
GO

MSSQL_MIG_HOST=localhost\SQLEXPRESS
MSSQL_MIG_DB=EDMS
MSSQL_MIG_USER=edms_admin
MSSQL_MIG_PASSWORD=P@ssw0rd_Edms123


SELECT local_net_address, local_tcp_port 
FROM sys.dm_exec_connections 
WHERE session_id = @@SPID;




