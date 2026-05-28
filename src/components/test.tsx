-- もし途中まで作成されていたら削除（エラーが出ても無視してOK）
USE EDMS;
DROP USER IF EXISTS edms_admin;
GO
USE master;
DROP LOGIN IF EXISTS edms_admin;
GO

-- パスワードを強くして再作成
CREATE LOGIN edms_admin WITH PASSWORD = 'Edms_Admin1!';
GO

USE EDMS;
GO
CREATE USER edms_admin FOR LOGIN edms_admin;
GO

ALTER ROLE db_ddladmin ADD MEMBER edms_admin;
ALTER ROLE db_datareader ADD MEMBER edms_admin;
ALTER ROLE db_datawriter ADD MEMBER edms_admin;
GO
