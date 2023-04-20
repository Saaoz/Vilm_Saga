import react from 'react';

function Hero() {
    return (
        <section className="hero">
            <h2 className="title">Titre</h2>
            <p className="syno">
                In the year 2092, space is full of dangerous floating garbage
                like discarded satellites and deserted spaceships. The crew of a
                space junk collector ship called The Victory discovers a
                humanoid robot that’s known to be a weapon of mass destruction.
                They get involved in a risky business deal and travel through
                space looking for garbage they can make money off of while also
                competing with rival junk collectors.
            </p>
            <div className="avis">
                <img className="star" src="#" alt="#" />
                <p className="note">Note</p>
            </div>
        </section>
    );
}

export default Hero;
