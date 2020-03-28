# devotional-devtrip.github.io

## How to run site on local PC. 

1.[Using NodeJs](#node-js)

2.[Using IIS](#iis)

#### Node-Js

````

Install npm and nodejs with your system and execute fallowing commands -

1. npm install -g http-server
2. cd <projec dir>
3. http-server 

````

#### IIS

````

No special configuration required. 
Just update IIS manager to point localhost(127.0.0.1) on root dir of downloaded package.

````

## How to add/update contains

1.[Add New Book](#add-new-book)

2.[Add Book Content](#add-book-content)

#### Add-New-Book

````
1. Open assets\json\book.json with any text editor like Notepad++ .
2. Add a object with available books array, and can also add specific content object as in below JSON.
    {
        "id":2,
        "mastername": "Sai baba Katha, Arti & 108 Names",
        "content":[
            {
                "name":"Sai baba book",
                "description":"Sai Baba Book contains vrat story, arati, 108 names and other auspecious mantras.",
                "author":"anonymous",
                "contenturl":"",
                "bookurl":"",
                "authorurl":"",
                "copyright":"",
                "route":"saibababook"
            }
        ]
       
    }

````
#### Add Book Content

````

1. Open assets\books package and create a .json file with name mentioned in route key in book.json within content array.
   e.g. "route":"saibababook" in above JSON, and book file name must be saibababook.json .
   
2. Create book content array as in below within above json file.
  
  [
    {
        "id":1,
        "name": "SAIBABABOOK",
        "displayname":"श्री साईं बाबा व्रत कथा",
        "config": {"itemsPerPage":2,"currentPage":1},
        "page": [
          {}
         ]
    }
]

3. Add page object as fallows, # is the line seperator. 

   {"seq":"2", "heading":"श्री साईं बाबा आरती 1", "data":"line 1 # line 2"}

4. Validate JSON file using browser or any other JSON validator. 

5. Save this json file and refresh web  page. 

````
