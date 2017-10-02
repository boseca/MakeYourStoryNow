@echo off
@echo -------------------------------------------------
@echo Build and deploy to the LIVE server
@echo -------------------------------------------------
ember deploy production & call upload.bat
:: @echo uploading the file....
:: upload.bat
@echo ALL DONE!