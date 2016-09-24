REM (Starts Server)

REM (Shows Only Outputs)
@ECHO OFF
CLS

REM (Tries to Start the Server with Nodemon)
nodemon server.js

REM (If Nodemon Does Not Exist Start Server With Node)
IF %ERRORLEVEL%==9009 (
  CLS
  node server.js
)

PAUSE
