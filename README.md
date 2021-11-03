# Shortening Url

usage:
npm start

tests:
npm test

# paths:
1) shorten url
http://localhost/encode
params: 
url - valid url address

returns:
shorturl

2) get 
http://localhost/encode
params: 
shorturl - valid url address

returns: 
url

# known issues:
non existing hash on decode will give empty string

# todo:
add apidoc

# more:
if you add the "REST Client" extention in VSCODE, you can run manual tests via test/manual.http 