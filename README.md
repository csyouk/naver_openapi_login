# Using Naver Open api Login to Service

This project demonstrate a login flow using naver open api(https://developers.naver.com/main).

## Boot server

python -m SimpleHTTPServer

## Login via webbrowser

127.0.0.1:8000 (DO NOT USE localhost:8000)

### Simple Explanation

  var naver_id_login = new naver_id_login("NAVER-CLEINT-ID", "Callback URL");

** This will create naver login button **
If you set the "Callback URL" like  <http://127.0.0.1:8000/succeess.html> api lib will redirect you to callback url.

After redirected. You have to tokenize your query params.
In 'success.js' you can see the **getQueryParams** function.

  By Calling **get_naver_userprofile** function you can get user profiles.


### This document written in 2016.04.27
