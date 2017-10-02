@echo off
@echo -------------------------------------------------
@echo Upload files to the live server
@echo -------------------------------------------------


@echo 
@echo Delete 'front-end' folder in 'deploy-archive' 
@echo 
:: this is supposed to be cleaned automatically but it's not)
rmdir tmp\deploy-archive\front-end /s /q


@echo -------------------------------------------------
:: @echo ftp 		- not working - god knows why
:: @echo filezilla 	- cmd is not supported
:: @echo curl		- working but SLOW
@echo WinSCP		- transfering `build.tar.gz` to the LIVE server
@echo -------------------------------------------------


:: CURL ---------------------------------
:: it's working but it's slow CURL_MAX_WRITE_SIZE  is limted to 32bytes
:: ref: https://curl.haxx.se/mail/lib-2013-02/0009.html
:: curl -T build.tar.gz ftp://crm-hi:%FTP_CRM_HI_PWD%@54.172.129.204:2121/

:: FTP - not working --------------------
:: echo open >ftpcmd.dat
:: echo user crm-hi>>ftpcmd.dat
:: echo %FTP_CRM_HI_PWD%>>ftpcmd.dat
:: echo bin>>ftpcmd.dat
:: REM echo put build.tar.gz>>ftpcmd.dat
:: REM echo quit>>ftpcmd.dat
:: ftp -n -s:ftpcmd.dat
:: del ftpcmd.dat


:: WinSCP - (WORKING) ------------------
:: @echo WINSCP.............
:: winscp.com /command ^
::     "open ftp://crm-hi:%FTP_CRM_HI_PWD%@54.172.129.204:2121"  ^
::     "put tmp\deploy-archive\build.tar.gz /compressed/" ^
::     "put tmp\deploy-archive\touch.me.txt /touch/" ^
::     "exit"


:: Github deploy