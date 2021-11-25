# Coding Notes: TLP Portfolio

### 11/13/2021

Decided to redo my web design portfolio. I found an interesting tool to use called [Favicon.io](https://favicon.io/). You can generate our own favicon for your browser tab. I also used a [Fancy Border Radius Generator](https://9elements.github.io/fancy-border-radius/) to change the shape of my profile picture. I added a wave svg to my background. I included the website link because it's a good resource.

Resources:

- [CSS CodeLab](https://www.csscodelab.com/css-examples/): Great website for code examples in HTML, CSS, and JS.
- [Waverly](https://wavelry.vercel.app/): used to make a wave svg for hero background.

### 11/20/2021

Hi again. I decided to use Bootstrap for my portfolio page. I am taking too long to put this page together.

### 11/21/2021

Good afternoon. I decided to abandon Bootstrap. I remembered why I didn't want to use it as much--it's too restrictive in some cases. I'm trying a different approach. I am using a portfolio website as a guide. My indecision gets the best of me. I just need to make a portfolio webpage. I'm back to the tutorial from FreeCodeCamp.

### 11/25/2021

Happy Thanksgiving! I'm back. Trying to focus on the structure and design of my site before I deal with the wording of my about section.

---

My name is Trista Lanette Pollard. My journey towards becoming a Front-End Web Developer started over 4 years ago. I became interested in computer coding after a parent approached me about sponsoring the "Hour of Code" with Code.org at our school. Once I attended a training session in New York City, I was hooked!

I started working on tutorials at FreeCodeCamp in January 2017. I have earned three certificates from FreeCodeCamp. I earned my Front-End Web Developer Nanodegree from Udacity in 2019.

Credentials and Skills
Certificates

Front End Libraries, FreeCodeCamp, May 16, 2020
Front-End Web Developer Nanodegree, Udacity, August 18, 2019
JavaScript Algorithms and Data Structures, FreeCodeCamp, July 11, 2019
Responsive Web Design, FreeCodeCamp, November 15, 2018

---

/_ font-family: 'Architects Daughter', cursive;
font-family: 'Open Sans', sans-serif; _/

@import url('https://fonts.googleapis.com/css?family=Architects+Daughter|Open+Sans');

- {
  /_ outline: 1px solid black; _/
  box-sizing: border-box;
  }

body, html {
width: 100%;
box-sizing: border-box;
}

.row {
margin-bottom: 20px;
}

h1,
h2,
h3,
h5 {
font-family: "Architects Daughter", cursive;
color: white;
}

h4, p, input, li a {
font-family: "Open Sans", sans-serif;
}

/_Navbar_/
#696969 Dim Gray
#FFE4E1 Misty Rose
#000000 Black/ Light Black #202020
#A9A9A9 Dark Gray
#F5F5F5 White Smoke

<a target="_blank" href="https://icons8.comundefined">Envelope</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>

/_ font-family: 'Bangers',
cursive;
font-family: 'Open Sans',
sans-serif;_/

@import url('https://fonts.googleapis.com/css2?family=Gravitas+One&family=Open+Sans:wght@400;700&display=swap');

/_ Variables _/
:root {
--body-font-family: 'Open Sans', sans-serif;
--weight-normal: 400;
--weight-bold: 700;
--primary-bg-color: #000000;
--secondary-bg-color: #202020;
--primary-color: #FFE4E1;
--secondary-color: #F5F5F5;
--primary-shadow: #d4d4d4;
--secondary-shadow: #E7C2BB;
--bg-icon-card: #696969;
--bg-projects: #454545;
--bottom-margin: 0.5rem;
--bottom-margin-2: 1rem;
--line-height: 1.7rem;
--transition: 0.3s;
}

/_ CSS Resets _/

- {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 1px solid white;
  }

html {
font-size: 100%;
}

ul {
list-style-type: none;
}

a {
text-decoration: none;
color: var(--primary-color);
}

a:hover {
color: var(--secondary-color);
}

h1,
h2,
h3,
h4,
h5 {
font-family: "Gravitas One", cursive;
color: var(--primary-color);
}

p,
li {
color: var(--secondary-color);
}

p {
font-size: 1.25em;
}

body {
font-family: var(--body-font-family);
/_background-color: black;_/
}

.container {
width: 100%;
height: 100%;
}

/_ Navbar _/

.navbar-dark,
.navbar-brand,
.navbar-toggler-icon,
.nav-link {
color: var(--primary-color) !important;
}

.navbar-collapse {
text-align: center;
}

/_ https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio-website/#thenavbarsection _/

/\* Nav
nav {
position: sticky;
top: 0;
left: 0;
z-index: 1;
display: flex;
align-items: center;
justify-content: space-between;
padding: 1.5rem 3.5rem;
background-color: var(--primary-bg-color);
box-shadow: 0 .3rem .5rem rgba(0, 0, 0, 0.1);
}

nav a {
transition: var(--transition);
font-size: 1.2rem;
}

nav a:hover {
border-bottom: 2px solid var(--secondary-color);
}

nav ul {
display: flex;
gap: 1.9rem;
}

nav ul li {
font-weight: var(--weight-bold);
margin: .8rem;
}

.hamburger-menu {
color: var(--primary-color);
font-size: 2rem;
border: 0;
background-color: transparent;
cursor: pointer;
display: none;
}

/\* Hero

.hero {
display: flex;
align-items: center;
justify-content: space-around;
gap: 1.5rem;
height: 100%;
max-width: 100%;
background-image: url(/assets/images/bg*new_wave*.png);
background-repeat: no-repeat;
background-size: cover;
background-position: top center;

}

.hero img {
height: 30%;
width: 30%;
margin: 2rem;
border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
}

.social-links {
display: flex;
font-size: 0.875em;
line-height: 1.4rem;
margin-bottom: 4rem;
}

.social-links span {
color: var(--primary-color);
padding: 0 0.5rem;
}
.bio {
max-width: 40rem;
padding: 1rem;
border-radius: .6rem;
box-shadow: 0 .2rem 1.5rem .2rem var(--secondary-color);
}

.bio h2 {
margin-bottom: var(--bottom-marg1in);
padding: 2rem;
font-size: 1.75em;
}

.bio p {
line-height: var(--line-height);
font-size: 2em;
line-height: 2rem;
padding: 2rem;
text-align: left;
}

.more-about {
max-width: 80rem;
margin: 4rem auto;
background-color: transparent;
padding: 2rem;
}

.more-about h2 {
margin-bottom: var(--bottom-margin);
padding: 2rem;
text-align: center;
font-size: 1.75em;
}

.more-about p {
line-height: 2.5rem;
font-size: 1.5em;
padding: 1rem;
}

/\* Skills
.skills {
max-width: 100%;
margin: auto;
text-align: center;
margin-top: 2.5rem;
}

.skill-header {
margin-bottom: 1rem;
padding: 2rem;
font-size: 1.75em;
}

.skills-header {
margin-bottom: 1rem;
padding: 2rem;
}

.skills-wrapper {
display: flex;
justify-content: space-around;
align-items: center;
margin-top: 2rem;
}

.skills-wrapper img {
padding: 1.25rem;
}

.skills-icons {
padding: 3rem;
}
.icon {
width: 11.875rem;
width: 11.25rem;
}

.icon-card {
background-color: var(--bg-icon-card);
border-radius: 1.1rem;
box-shadow: 0 .3rem 1rem var(--secondary-shadow);
padding: 2rem;
margin: 1rem;
}

.credentials-wrapper {
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
}
.credentials-header {
margin-bottom: 2rem;
padding: 2rem;
}

.credentials-list {
margin-top: 1rem;
padding: 2rem;
text-align: left;
}

.credential-item{
padding: 1rem;
font-size: 1.5em;
border-bottom: 1px solid var(--primary-shadow);
}

/\* Projects Sections
.projects {
background-color: var(--bg-projects);
padding: 3.2rem 0;
margin-top: 2rem;
}

.project-pic {
width: 65%;
height: 60%;
margin-bottom: 1rem;
}

.projects-wrapper {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 2rem;
}

.projects-row {
display: flex;
justify-content: center;
align-items: flex-start;
margin-bottom: 3rem;
}

.projects-title {
text-align: center;
margin-bottom: 1rem;
padding: 2rem;
font-size: 1.75em;
}

.project-container {
text-align: center;
width: 33;
height: 33%;
margin: 0 2rem;
}

.project-container p {
padding: 0.4rem;
margin-bottom: 1rem;
}

.project-title {
margin-bottom: 1rem;
}

.project-card {
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 2rem;
margin: 1rem;
}

/\* Contact Section

.contact-container {
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
}

.contact-introduction {
display: flex;
flex-direction: column;
align-items: center;
padding: 2rem;
margin: 4rem 2rem;
text-align: center;
}

.contact-subtitle,
.contact-title {
padding: 2rem;
}

.contact-title {
font-size: 1.75em;
}

.contact-text{
width: 80%;
line-height: 2.6rem;
margin-bottom: 1.3rem;
}
.contact-row {
width: 100%;
display: flex;
justify-content: center;
}

.contact-item{
display: flex;
justify-content: space-between;
align-items: center;
height: 6rem;
line-height: 6rem;
margin: 2rem;
background-color: var(--secondary-bg-color);
}
.contact-icon {
font-size: 2.3rem;
}

.contact-item span {
font-size: 1.25em;
padding: 0 2rem;
}

/\* Socials Section
.socials {
display: flex;
flex-direction: column;
position: fixed;
right: 1%;
bottom: 50%;
}

.socicon {
width: 2.5rem;
height: 2.5rem;
}

\*/

/\* Media Queries for responsiveness
@media screen and (max-width: 768px) {
nav {
padding: 1.5rem 1rem;
}

    nav h1 {
        font-weight: var(--weight-bold);
        width: 100%;
    }

    nav ul {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 8.6rem;
        left: 10%;
        width: 80%;
        text-align: center;
        transform: translateX(120%);
        transition: transform 0.5s ease-in;
    }

    nav ul li {
        margin: .8rem;
    }

    .hamburger-menu {
        display: block;
    }

    nav ul.show {
        transform: translateX(0);
    }

    .hero {
        flex-direction: column;
    }

    .hero img {
        height: 35%;
        width: 35%;
    }

    .skills-wrapper {
        flex-direction: column;
    }

    .projects-row {
        flex-direction: column;
    }

    .project-container {

    }

}

\*/
