# medopad-test
Technical Challenge for Medopad interview.   

## Stack and Tools  
- HTML5  
- CSS3  
- JavaScript  
- React  
- Webpack  
- Styled Components  
- Yarn

## Goal 
Implement the image below from the following JSON: 
```
[
    {
        "id": 1,
        "name": "Jason Bourne",
        "role": "Registered user",
        "place": "New York",
        "avatar_url": "https://api.adorable.io/avatars/250/jason-bourne"
    },
    {
        "id": 2,
        "name": "Michael De Santa",
        "role": "Moderator",
        "place": "Los Santos",
        "avatar_url": "https://api.adorable.io/avatars/250/michael"
    },
    {
        "id": 3,
        "name": "Peter Parker",
        "role": "Moderator",
        "place": "New York",
        "avatar_url": "https://api.adorable.io/avatars/250/peter-parker"
    },
    {
        "id": 4,
        "name": "Harry Potter",
        "role": "Admin",
        "place": "Hogwarts",
        "avatar_url": "https://api.adorable.io/avatars/250/harry"
    },
    {
        "id": 5,
        "name": "Boromir",
        "role": "Registered user",
        "place": "Gondor",
        "avatar_url": "https://api.adorable.io/avatars/250/boromir"
    },
    {
        "id": 6,
        "name": "Bruce Wayne",
        "role": "Sponsor",
        "place": "Gotham City",
        "avatar_url": "https://api.adorable.io/avatars/250/bruce-wayne"
    }
]
```

### Image  
![Image](https://i.imgur.com/hNI8uYkl.png)
### My Result
![Result](https://i.imgur.com/6QGHFvkl.png)  
To view the project, download the repo and run ``` yarn install && yarn start ```
### Challenges and Reasoning
- I chose styled components for styling because I wanted to practice the techniques (I used Sass stylesheet last time)  
- Setting up Webpack took a while but I have better a understanding of configs now  
- Editted the JSON file to generate forum post content, user avatar is used as a placeholder for thumbnail of the post.

### Future Work  
- Write snapshot tests for the components
- Try using CSS Modules for styling  
- Store variables likes colors and font sizes for reuse 
- Match fonts and thumbnails with image  

