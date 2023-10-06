//conncet
let h1collection=document.getElementsByTagName('h1');
h2collection=[]
for (let  h1 of h1collection){
    console.log(h1);
    h1.style.color='red'
    h1.style.fontWeight='bold'
    h1.style.textDecoration='overline'
    h1.style.textShadow='2px 2px 2px black'

}
///div ar kaj  diya feild
let container=document.getElementById('container');

let ul_list=document.createElement('ul');

let li1=document.createElement('li');
let li2=document.createElement('li');
let li3=document.createElement('li');
li1.innerText='bhandhorbhon';
li2.innerText='chnadpur';
li3.innerText='comilla';
ul_list.appendChild(li1);
ul_list.appendChild(li2);
ul_list.appendChild(li3);
container.appendChild(ul_list);

//short cut 

let seaction=document.getElementById('content');
let ul=document.createElement('ul');
ul.innerHTML=`
<li>sundorbhon</li>
<li>bhandorbon</li>
<li>sajek</li>
`
seaction.appendChild(ul);

//






