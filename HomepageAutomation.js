var styletext = 
" \
     @keyframes flyaway {  \
     0% {  \
         transition: 5s ease-in;  \
       }  \
       100% {  \
         transform: translate(350px, 100px); \
       }  \
     }  \
     \
     #airplane1 {  \
       animation: flyaway 10s ease-in forwards;  \
       -moz-animation-iteration-count: 1;  \
       animation-iteration-count: 1;   \
     }  \
 "

var newStyleBlock = document.createElement("style");
     newStyleBlock.textContent = styletext;
     document.head.appendChild(newStyleBlock);
