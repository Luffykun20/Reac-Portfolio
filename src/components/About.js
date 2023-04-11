import React from "react";

function About() {
    return (
        <div>
            <p className="content is-large">Cristhian Bustamante</p>
            <img className="profilePic" src={'/public/assets/fresh-me.png'} alt="fresh cristhian" />
            <p className="content mt-6">
                Welcome to my developer portfolio! My name is Cristhian Bustamante. I am 28 years old from Peru.
                I enrolled to the Full Stack web-Development Coding Bootcamp in search of commitment to a career
                that will challenge and push me to become a better version of myself in all aspects. I also enjoy
                reading books, playing chess, cooking, and dancing. Stick around and go along with me through my
                developer path!
            </p>
        </div>
    );
}

export default About;